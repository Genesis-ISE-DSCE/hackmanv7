import { Request, Response } from "express";
import { db } from "../utils/db";
import { AppError } from "../utils/error";

export const profileLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email === "" || password === "") {
    throw new AppError({ message: "Invalid credentials", name: "BAD_REQUEST" });
  }

  const user = await db.team.findFirst({
    where: {
      leaderEmail: email,
    },
  });
};
