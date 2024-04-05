import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { db } from '../utils/db';
import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();
// auth
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try{
        const user = await db.team.findFirst({
            where: {
                leaderEmail: email,
            },
        });
        if (!user)
            throw new Error("No user found with the given email address")
        if (user.password && compareSync(password, user.password)) {
            const token = jwt.sign({ email: user.leaderEmail,teamName:user.teamName }, process.env["JWT_KEY"] as string);
            res.status(200).json({ token, msg: "Authenticated", status: true });
        }
        else {
            throw new Error("Authentication failed, Invalid credentials");
        }
    }
    catch(err){
        res.json({
            status:false,
            err
        })
    }
}
export const getTeamDetails = async (req: Request, res: Response) => {
    const teamName = req.user.teamName;
    try {
        const team = await prisma.team.findUnique({
            where: {
                teamName
            },
            include: {
                members: true,
            },
        });

        if (!team) {
            return res.status(404).json({ status: false, error: 'Team not found' });
        }

        res.status(200).json({ team, status: true });
    } catch (error) {
        console.error('Error fetching team details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export const addTeamMember = async (req: Request, res: Response) => {
    const { teamId, name, email, phoneNumber, isLead } = req.body;

    try {
        // Check if the team already has 4 members
        const teamMembersCount = await prisma.participant.count({
            where: {
                teamId,
            },
        });

        if (teamMembersCount >= 4) {
            return res.status(400).json({ status: false, error: 'Team already has maximum members' });
        }

        // Add the team member
        const newMember = await prisma.participant.create({
            data: {
                name,
                email,
                phoneNumber,
                teamId,
                isLead,
            },
        });

        res.status(201).json({ newMember, status: true });
    } catch (error) {
        console.error('Error adding team member:', error);
        res.status(500).json({ status: false, error: 'Internal server error' });
    }
};

// Change phoneNumber of a team member
export const changePhoneNumber = async (req: Request, res: Response) => {
    const { memberId } = req.params;
    const { phoneNumber } = req.body;

    try {
        const updatedMember = await prisma.participant.update({
            where: {
                id: memberId,
            },
            data: {
                phoneNumber,
            },
        });

        res.status(200).json({ status: true, updatedMember });
    } catch (error) {
        console.error('Error changing phone number:', error);
        res.status(500).json({ status: false, error: 'Internal server error' });
    }
};

// Remove a team member if not a lead
export const removeTeamMember = async (req: Request, res: Response) => {
    const { memberId } = req.params;

    try {
        const member = await prisma.participant.findUnique({
            where: {
                id: memberId,
            },
        });

        if (!member) {
            return res.status(404).json({ status: false, error: 'Member not found' });
        }

        if (!member.isLead) {
            await prisma.participant.delete({
                where: {
                    id: memberId,
                },
            });
            res.status(200).json({ status: true, message: 'Member removed successfully' });
        } else {
            res.status(400).json({ status: false, error: 'Lead member cannot be removed' });
        }
    } catch (error) {
        console.error('Error removing team member:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Edit team member
export const editTeamMember = async (req: Request, res: Response) => {
    const { memberId } = req.params;
    const { name, email, phoneNumber, isLead } = req.body;

    try {
        const updatedMember = await prisma.participant.update({
            where: {
                id: memberId,
            },
            data: {
                name,
                email,
                phoneNumber,
                isLead,
            },
        });

        res.status(200).json({ updatedMember, status: true });
    } catch (error) {
        console.error('Error editing team member:', error);
        res.status(500).json({ status: false, error: 'Internal server error' });
    }
};

// Add or edit github link of a team
export const addOrEditGithubLink = async (req: Request, res: Response) => {
    const { teamId } = req.params;
    const { githubLink } = req.body;

    try {
        const updatedTeam = await prisma.team.update({
            where: {
                id: teamId,
            },
            data: {
                githubLink,
            },
        });

        res.status(200).json({ status: true, updatedTeam });
    } catch (error) {
        console.error('Error adding/editing github link:', error);
        res.status(500).json({ status: false, error: 'Internal server error' });
    }
};
