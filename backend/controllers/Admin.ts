import { Request, Response } from "express";
import { db } from "../utils/db";
import { HttpStatus } from "../utils/statusCodes";
import { AppError } from "../utils/error";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { adminSchema } from "../zod/auth-validator";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

interface TeamInfo {
  teamName: String;
  leader: {
    name: String;
    email: String;
    phoneNumber: String;
  };
  githubLink: String | null;
  payStatus: Boolean;
  paymentPic: String | null;
}

export const adminLogin = async (req: Request, res: Response) => {
  const { email, password } = adminSchema.parse(req.body);

  if (email === process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASS) {
    const token = jwt.sign({ email: email }, JWT_SECRET);
    return res
      .status(HttpStatus.OK)
      .json({ success: true, token: token, message: "Login Successfull" });
  }
  throw new AppError({ name: "UNAUTHORIZED", message: "Invalid credentials!" });
};

export const getAllTeams = async (req: Request, res: Response) => {
  const teams: TeamInfo[] = await db.team.findMany({
    select: {
      id: true,
      teamName: true,
      leader: {
        select: {
          name: true,
          email: true,
          phoneNumber: true,
        },
      },
      githubLink: true,
      payStatus: true,
      paymentPic: true,
    },
  });

  if (!teams)
    throw new AppError({
      name: "NOT_FOUND",
      message: "Teams not found!",
    });

  return res.status(HttpStatus.OK).json({ success: true, teams: teams });
};

export const deleteTeam = async (req: Request, res: Response) => {
  const teamId = req.params.id;

  const existingTeam = await db.team.findUnique({
    where: {
      id: teamId,
    },
  });

  if (!existingTeam) {
    throw new AppError({ name: "NOT_FOUND", message: "Team not found!" });
  }

  const deleteTeam = await db.leader.delete({
    where: {
      id: existingTeam.leaderId,
    },
  });

  if (deleteTeam)
    return res
      .status(HttpStatus.OK)
      .json({ success: true, message: "Team deleted successfully!" });
};

export const updatePaymentStatus = async (req: Request, res: Response) => {
  const teamId = req.params.id;

  const existingTeam = await db.team.findUnique({
    where: {
      id: teamId,
    },
  });

  if (!existingTeam) {
    throw new AppError({ name: "NOT_FOUND", message: "Team not found!" });
  }

  const updatedTeamStatus = await db.team.update({
    where: {
      id: teamId,
    },
    data: {
      payStatus: true,
    },
  });

  if (updatedTeamStatus)
    return res
      .status(HttpStatus.OK)
      .json({ success: true, message: "Payment Status Updated!" });
};
