import { Request, Response } from "express";
import { db } from "../utils/db";
import { AppError } from "../utils/error";
import { generateRandomPassword } from "../utils/randomPassword";
import { addJobs } from "../utils/emailQueue";
import { registrationSchema } from "../zod/auth-validator";

interface Leader {
  name: string;
  email: string;
  phoneNumber: string;
}

interface TeamInfo {
  name: string;
}

export const registerController = async (req: Request, res: Response) => {
  const { leader, teamInfo }: { leader: Leader; teamInfo: TeamInfo } =
    registrationSchema.parse(req.body);

  const existingL = await db.leader.findFirst({
    where: {
      email: leader.email,
    },
  });

  const existingParticipant = await db.participant.findFirst({
    where: {
      email: leader.email,
    },
  });

  if (existingL || existingParticipant)
    throw new AppError({
      name: "BAD_REQUEST",
      message: "This Email is already Registered",
    });

  const teamExist = await db.team.findUnique({
    where: {
      teamName: teamInfo.name,
    },
  });

  if (teamExist)
    throw new AppError({
      name: "BAD_REQUEST",
      message: "Team Name Not Available",
    });

  await db.$transaction(async (db) => {
    const password = generateRandomPassword(teamInfo.name);

    const l = await db.leader.create({
      data: {
        email: leader.email,
        name: leader.name,
        phoneNumber: leader.phoneNumber,
        password: password,
      },
    });

    const team = await db.team.create({
      data: {
        teamName: teamInfo.name,
        leaderId: l.id,
      },
    });

    if (team && l) {
      const emailOptions = {
        password: password,
        email: l.email,
        teamName: teamInfo.name,
      };

      addJobs(emailOptions);
      return res.status(201).json({ message: "Registration successfull!" });
    }

    throw new AppError({
      name: "INTERNAL_SERVER_ERROR",
      message: "Registration Unsuccessfull!",
    });
  });
};
