import { Request, Response } from "express";
import { db } from "../utils/db";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { HttpStatus } from "../utils/statusCodes";
import { AppError } from "../utils/error";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const JWT_SECRET = process.env.JWT_SECRET;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;

//@ts-ignore
const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

//AUTHENTICATION
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await db.leader.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(HttpStatus.NOT_FOUND).json({ message: "User Not Found" });
  }

  if (!JWT_SECRET) {
    throw new Error("JWT secret is not defined");
  }

  if (user.password && compareSync(password, user.password)) {
    const token = jwt.sign({ email: user.email, userId: user.id }, JWT_SECRET);
    res
      .status(HttpStatus.OK)
      .json({ token: token, message: "Login Successfull" });
  } else {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "Authentication Failed, Invalid Creds" });
  }

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Internal server error in Login",
  });
};

//GET TEAM DETAILS
export const getTeamDetails = async (req: Request, res: Response) => {
  const { teamName } = req.body;

  const team = await db.team.findUnique({
    where: {
      teamName,
    },

    include: {
      members: true,
    },
  });

  if (!team) {
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ message: "Team Does Not Exist" });
  }

  res.status(HttpStatus.OK).json({ team: team });

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Error in fetching Team Details",
  });
};

//ADD NEW TEAM MEMBER
export const addTeamMemeber = async (req: Request, res: Response) => {
  const { teamId, name, email, phoneNumber } = req.body;
  const memberCount = await db.participant.count({
    where: {
      teamId,
    },
  });

  if (memberCount >= 4) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Team already has maximum members" });
  }

  const newMember = await db.participant.create({
    data: {
      name,
      email,
      phoneNumber,
      team: {
        connect: { id: teamId },
      },
    },
  });

  await db.team.update({
    where: { id: teamId },
    data: {
      members: {
        connect: { id: newMember.id },
      },
    },
  });

  res
    .status(HttpStatus.OK)
    .json({ message: "Member Added Succesfully", member: newMember });

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "error in team member addition",
  });
};

//UPDATE MEMBER NUMBER
export const changePhoneNumber = async (req: Request, res: Response) => {
  const { phoneNumber } = req.body;
  const { memberId } = req.params;

  const updateNumber = await db.participant.update({
    where: {
      id: memberId,
    },
    data: {
      phoneNumber,
    },
  });

  res
    .status(HttpStatus.OK)
    .json({ changedNumber: updateNumber, message: "Updation Succesfull" });

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Error in updation number",
  });
};

//Removal OF MEMBER
export const removeMember = async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const member = await db.participant.findUnique({
    where: {
      id: memberId,
    },
  });

  if (!member) {
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ message: "Member does not exist " });
  }

  await db.participant.delete({
    where: { id: memberId },
  });

  res.status(HttpStatus.OK).json({ message: "Member Deleted", member: member });

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "error in removing member",
  });
};

//EDIT TEAM MEMBERS
export const editTeamMember = async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const { name, email, phoneNumber } = req.body;

  const updateMember = await db.participant.update({
    where: { id: memberId },
    data: {
      name,
      email,
      phoneNumber,
    },
  });

  res.status(HttpStatus.OK).json({ update: updateMember });

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Error in editing team",
  });
};

//EDIT GITHUB
export const addOrEditgithub = async (req: Request, res: Response) => {
  const { teamId } = req.params;
  const { githubLink } = req.body;

  const updatedTeam = await db.team.update({
    where: { id: teamId },
    data: {
      githubLink,
    },
  });
  res.status(HttpStatus.OK).json({ message: "github added", updatedTeam });

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Error in addoreditgithub",
  });
};

//UPLOAD PAYMENT
export const uploadPic = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await db.team.findUnique({
    where: {
      id: id,
    },
  });

  if (!team) {
    throw new AppError({ message: "Team not found!", name: "BAD_REQUEST" });
  }

  const fileName = team?.teamName;

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: req.file?.buffer,
    ContentType: req.file?.mimetype,
  };

  const command = new PutObjectCommand(params);
  const response = await s3.send(command);

  if (response.$metadata.httpStatusCode === 200) {
    const getObjectParams = {
      Bucket: bucketName,
      Key: fileName,
    };

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command);

    console.log(url);

    const addPic = await db.team.update({
      where: {
        id: id,
      },
      data: {
        paymentPic: url,
      },
    });

    if (addPic) {
      return res
        .status(HttpStatus.OK)
        .json({ success: true, message: "Payment Pic Added Succesfully" });
    }
  }

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Error in uploading photo",
  });
};
