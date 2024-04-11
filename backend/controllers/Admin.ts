import { Request, Response } from "express";
import { db } from "../utils/db";
import { error } from "console";
import { HttpStatus } from "../utils/statusCodes";
import { json } from "stream/consumers";
import { AppError } from "../utils/error";

interface TeamInfo {
  teamName: String;
  leader: {
    name: String;
    email: String;
    phoneNumber: String;
  };
  githubLink: String;
  payStatus: Boolean;
  paymentPic: String;
}

export const getAllTeams = async (req: Request, res: Response) => {
  //@ts-ignore
  const teams: TeamInfo[] = await db.team.findMany({
    select: {
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

  res.status(HttpStatus.OK).json(teams);
  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Error in getting all users",
  });
};

export const deleteTeam = async (req: Request, res: Response) => {
  const teamId = req.params.teamId;

  const existingTeam = await db.team.findUnique({
    where: {
      id: teamId,
    },
  });

  if (!existingTeam) {
    return res.status(HttpStatus.NOT_FOUND).json({ error: "Team not found" });
  }

  const deletedTeam = await db.team.delete({
    where: {
      id: teamId,
    },
  });

  res.status(HttpStatus.OK).json(deletedTeam);

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Error in deleting team",
  });
};

export const updatePaymentStatus = async (req: Request, res: Response) => {
  const teamId = req.params.teamId;

  const existingTeam = await db.team.findMany({
    where: {
      id: teamId,
    },
  });

  if (!existingTeam) {
    return res.status(HttpStatus.NOT_FOUND).json({ error: "Team Not Found" });
  }

  const updatedTeamStatus = await db.team.update({
    where: {
      id: teamId,
    },
    data: {
      payStatus: true,
    },
  });

  res.status(HttpStatus.OK).json(updatedTeamStatus);

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Error in Updation of Payment Status",
  });
};
