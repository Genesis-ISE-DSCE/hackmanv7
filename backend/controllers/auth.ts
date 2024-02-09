import { Request, Response } from "express";
import { db } from "../utils/db";

// id Int @id @default(autoincrement())
// name String
// email String @unique
// phoneNumber String
// team Team @relation(fields: [teamId] ,references: [id])
// teamId Int
// isLead Boolean @default(false)

// leader -->

// name,
// email,

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

  const team = await db.team.create({
    data: {
      teamName: teamInfo.name,
      upiId: teamInfo.upiId,
      transactionId: teamInfo.transactionId,
    },
  });

  members.map(async (member) => {
    const teamMate = await db.participant.create({
      data: {
        name: member.name,
        email: member.email,
        phoneNumber: member.phoneNumber,
        isLead: member.isLead === "true",
        teamId: team.id,
      },
    });
  });
};
