import { Request, Response } from "express";
import { db } from "../utils/db";
import { HttpStatus } from "../utils/statusCodes";
import { AppError } from "../utils/error";

interface TeamMember {
  name: string;
  email: string;
}

interface TeamInfo {
  teamName: string;
  teamMembers: TeamMember[];
  leaderEmail: string;
  payStatus: boolean;
  upiId: string;
  transactionId: string;
  githubLink: string | "N/A";
}

const getalluser = async (req: Request, res: Response) => {
  try {
    const teams = await db.team.findMany({
      include: {
        members: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    const teamInfo= teams.map((team) => ({
      teamName: team.teamName,
      teamMembers: team.members.map((member) => ({
        name: member.name,
        email: member.email,
      })),

      leaderEmail: team.leaderEmail,
      payStatus: team.payStatus,
      githubLink: team.githubLink,
      upiId: team.upiId,
    }));

    res.json(teamInfo);
  } catch (error) {
    console.error("Error in fetching data of code", error);

    const appError = new AppError({
      name: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
    });

    res.status(appError.statusCode).json({ error: appError.message });
  } finally {
    await db.$disconnect();
  }
};

const deleteuser = async (req: Request, res: Response) => {
  try {
    const teamId = req.params.teamId;
    const existingTeam = await db.team.findUnique({
      where: {
        id: teamId,
      },
    });

    if (!existingTeam) {
      const notFoundError = new AppError({
        name: "NOT_FOUND",
        message: "Team not found in the database",
      });

      res
        .status(notFoundError.statusCode)
        .json({ message: notFoundError.message });
      return;
    }

    await db.team.delete({
      where: {
        id: teamId,
      },
    });

    res.status(HttpStatus.OK).json({ message: "Team deleted successfully" });
  } catch (error) {
    console.error("Error in deleting team", error);

    const appError = new AppError({
      name: "INTERNAL_SERVER_ERROR",
      message: "Internal Server Error",
    });
    res.status(appError.statusCode).json({ message: appError.message });
  } finally {
    await db.$disconnect();
  }
};

export = {
  getalluser,
  deleteuser,
};
