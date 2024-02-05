import { Request, Response } from "express";
import { db } from "../lib/db";

// id Int @id @default(autoincrement())
// name String
// email String @unique
// phoneNumber String
// team Team @relation(fields: [teamId] ,references: [id])
// teamId Int
// isLead Boolean @default(false)

export const registerController = async (req: Request, res: Response) => {
  const { team, email, phoneNumber, isLead } = req.body;
};
