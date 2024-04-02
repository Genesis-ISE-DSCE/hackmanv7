import { Request, Response } from "express";
import { db } from "../utils/db";
import { AppError } from "../utils/error";
import { isValidEmail } from "../helpers/emailValidator";
import { sendEmailToLeader } from "../utils/mailer";
import { generateRandomPassword } from "../utils/randomPassword";
import { hashSync } from "bcrypt";
const salt:number = Number(process.env.SALT); 
interface Participant {
  name: string;
  email: string;
  phoneNumber: string;
  isLead: boolean;
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

  const leader = members.find((user) => user.isLead === true);
  const team = await db.team.create({
    data: {
      teamName: teamInfo.name,
      upiId: teamInfo.upiId,
      transactionId: teamInfo.transactionId,
      leaderEmail: leader?.email || "",
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
          isLead: member.isLead,
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
    const password = generateRandomPassword(teamInfo.name);
    const hashedPassword = hashSync(password,salt);
    const updatedTeam = await db.team.create({
      data: {
        teamName: teamInfo.name,
        upiId: teamInfo.upiId,
        transactionId: teamInfo.transactionId,
        leaderEmail: leader?.email || "",
        password: password,
      },
    });

    const status = await sendEmailToLeader(
      team.leaderEmail,
      teamInfo.name,
      password
    );

    if (status && updatedTeam) {
      return res
        .status(201)
        .json({ success: true, message: "Team successfully registered!" });
    }

    throw new AppError({
      message: "Some error occured",
      name: "INTERNAL_SERVER_ERROR",
    });
  }
  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Some Error Occurred",
  });
};
