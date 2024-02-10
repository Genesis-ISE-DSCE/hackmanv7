import { Request, Response } from "express";
import { db } from "../utils/db";

const getalluser = async (req: Request, res: Response) => {
  try {
    const teams = await db.team.findMany({
      include: {
        members: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log(teams);

    res.status(200).json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await db.$disconnect();
  }
};

const deleteuser = async (req: Request, res: Response) => {
  try {
    const { teamId } = req.params;

    const delteam = await db.team.delete({
      where: {
        id: teamId,
      },
      include: {
        members: true,
      },
    });
    res.status(200).json(`team deleted ${delteam.teamName}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await db.$disconnect();
  }
};

export = {
  getalluser,
  deleteuser,
};
