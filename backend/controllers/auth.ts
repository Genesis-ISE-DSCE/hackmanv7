import { Request, Response } from "express";
import { db } from "../utils/db";
import { AppError } from "../utils/error";
import { isValidEmail } from "../helpers/emailValidator";

interface Participant {
  name: string;
  email: string;
  phoneNumber: string;
  isLead: string;
}

interface TeamInfo {
  name: string;
  upiId: string;
  transactionId: string;
}

export const registerController = async (req: Request, res: Response) => {
  const { members, teamInfo }: { members: Participant[]; teamInfo: TeamInfo } =
    req.body;

  if (
    teamInfo.name === "" ||
    teamInfo.transactionId === "" ||
    teamInfo.upiId === ""
  ) {
    throw new AppError({
      name: "BAD_REQUEST",
      message: "Empty details found!",
    });
  }
  const team = await db.team.create({
    data: {
      teamName: teamInfo.name,
      upiId: teamInfo.upiId,
      transactionId: teamInfo.transactionId,
    },
  });

  if (team) {
    members.map(async (member) => {
      if (isValidEmail(member.email) || member.name !== "") {
        throw new AppError({
          name: "BAD_REQUEST",
          message: "Fill all the details",
        });
      }
      const teamMate = await db.participant.create({
        data: {
          name: member.name,
          email: member.email,
          phoneNumber: member.phoneNumber,
          isLead: member.isLead === "true",
          teamId: team.id,
        },
      });
      if (!teamMate) {
        throw new AppError({
          name: "INTERNAL_SERVER_ERROR",
          message: "Some Error Occurred",
        });
      }
    });
  }
  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Some Error Occurred",
  });
};
