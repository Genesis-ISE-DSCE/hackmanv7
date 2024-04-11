import { Request, Response } from "express";
import { db } from "../utils/db";
import { AppError } from "../utils/error";
import { isValidEmail } from "../helpers/emailValidator";
import { sendEmailToLeader } from "../utils/mailer";
import { generateRandomPassword } from "../utils/randomPassword";
import { hashSync } from "bcrypt";
import { addJobs, worker } from "../utils/emailQueue";

const salt: number = Number(process.env.SALT);

interface Leader {
  name: string;
  email: string;
  phoneNumber: string;
}

interface TeamInfo {
  name: string;
}

export const registerController = async (req: Request, res: Response) => {
  const { leader, teamInfo }: { leader: Leader; teamInfo: TeamInfo } = req.body;

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
      return res.status(201).json({ message: "Registeration successfull!" });
    }
    throw new AppError({
      name: "INTERNAL_SERVER_ERROR",
      message: "Registeration Unsuccessfull!",
    });
  });
};
