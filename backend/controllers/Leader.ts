import { Request, Response } from "express";
import { db } from "../utils/db";
import jwt, { Secret } from "jsonwebtoken";
import { HttpStatus } from "../utils/statusCodes";
import { AppError } from "../utils/error";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  editMemberSchema,
  githubSchema,
  loginSchema,
  memberSchema,
  teamNameSchema,
} from "../zod/auth-validator";

const JWT_SECRET = process.env.JWT_SECRET as string;
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
  const { email, password } = loginSchema.parse(req.body);

  const user = await db.leader.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError({ message: "User not found!", name: "NOT_FOUND" });
  }

  if (user.password === password) {
    const token = jwt.sign({ email: user.email, userId: user.id }, JWT_SECRET);
    return res
      .status(HttpStatus.OK)
      .json({ success: true, token: token, message: "Login Successfull" });
  }

  throw new AppError({
    name: "UNAUTHORIZED",
    message: "Invalid Credentials!",
  });
};

//GET TEAM DETAILS
export const getTeamDetails = async (req: Request, res: Response) => {
  const { id } = req.user;

  const team = await db.team.findUnique({
    where: {
      id,
    },
    include: {
      members: true,
      leader: {
        select: {
          name: true,
          email: true,
          phoneNumber: true,
        },
      },
    },
  });

  if (!team) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "Team Does Not Exist",
    });
  }

  if (team)
    return res.status(HttpStatus.OK).json({ success: true, team: team });
};

//ADD NEW TEAM MEMBER
export const addTeamMember = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, phoneNumber } = memberSchema.parse(req.body);

  const memberCount = await db.participant.count({
    where: {
      teamId: id,
    },
  });

  if (memberCount >= 3) {
    throw new AppError({
      name: "BAD_REQUEST",
      message: "Member limit reached!",
    });
  }

  const existingMember = await db.participant.findFirst({
    where: {
      email: email,
    },
  });

  const existingLeader = await db.leader.findFirst({
    where: {
      email: email,
    },
  });

  if (existingLeader || existingMember)
    throw new AppError({
      name: "BAD_REQUEST",
      message: "Email already regsitered!",
    });

  const newMember = await db.participant.create({
    data: {
      name,
      email,
      phoneNumber,
      teamId: id,
    },
  });

  if (newMember)
    return res.status(HttpStatus.OK).json({
      success: true,
      message: "Member Added Succesfully!",
      member: newMember,
    });
};

//Removal OF MEMBER
export const removeMember = async (req: Request, res: Response) => {
  const { id } = req.params;
  const member = await db.participant.findUnique({
    where: {
      id: id,
    },
  });

  if (!member) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "Member Not Found!",
    });
  }

  const deletedMember = await db.participant.delete({
    where: { id: id },
  });

  if (deletedMember)
    return res
      .status(HttpStatus.OK)
      .json({ success: true, message: "Member Deleted!" });
};

//EDIT TEAM MEMBERS
export const editTeamMember = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, phoneNumber } = editMemberSchema.parse(req.body);

  if (email) {
    const existingMember = await db.participant.findFirst({
      where: {
        email: email,
      },
    });

    const existingLeader = await db.leader.findFirst({
      where: {
        email: email,
      },
    });

    if (existingLeader || existingMember)
      throw new AppError({
        name: "BAD_REQUEST",
        message: "Email already regsitered!",
      });
  }

  const updateMember = await db.participant.update({
    where: { id: id },
    data: {
      name,
      email,
      phoneNumber,
    },
  });

  if (updateMember)
    return res
      .status(HttpStatus.OK)
      .json({ success: true, updatedMember: updateMember });
};

//EDIT GITHUB
export const addOrEditgithub = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { githubLink } = githubSchema.parse(req.body);

  const updatedTeam = await db.team.update({
    where: { id: id },
    data: {
      githubLink,
    },
  });

  if (updatedTeam)
    return res
      .status(HttpStatus.OK)
      .json({ success: true, message: "github link added", updatedTeam });
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
};
