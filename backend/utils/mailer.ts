//@ts-ignore
import fs from "fs";
import { db } from "./db";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  pool: true,
  maxConnections: 11,
  maxMessages: Infinity,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});
type Doc = {
  filename: string;
  path: string;
};
const attachmentDocsPath: Doc[] = [];

export const sendEmailToLeader = async (
  leaderEmail: string,
  teamName: string,
  password: string
) => {
  try {
    const mailOption = {
      from: process.env.MAIL_USER,
      to: leaderEmail,
      subject: `Registration successfull for the team ${teamName}`,
      text: `Dear Team Leader,\n\nThis is an update regarding the team "${teamName}".\n\nYour auto-generated password for login is: ${password}\n\nBest regards,\nTeam Hackman`,
    };
    await transporter.sendMail(mailOption);
    return true;
  } catch (error) {
    console.error("Error sending email to leader with password:", error);
    return false;
  }
};

const sendBrocures = async (memberEmail: string, teamName: string) => {
  try {
    if (process.env.MAIL_USER === undefined) {
      throw new Error("Email not specified in Environment");
    }
    const mailOption: nodemailer.SendMailOptions = {
      from: process.env.MAIL_USER,
      to: memberEmail,
      subject: `Brochure for team ${teamName}`,
      text: `Dear Team Member,\n\nPlease find attached the brochure for your team "${teamName}".\n\nBest regards,\nYour Team`,
      attachments: attachmentDocsPath.map((doc) => ({
        filename: doc.filename,
        content: fs.createReadStream(doc.path),
      })),
    };
    await transporter.sendMail(mailOption, (error) => {
      if (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.error("Error sending brochure:", error);
  }
};

export const sendMassMail = async (teamName: string, req: Request) => {
  try {
    const team = await db.team.findUnique({
      where: { teamName },
      include: {
        members: true,
      },
    });

    const members = req.body;
    if (!team) {
      console.warn(`Team ${teamName} not found.`);
      return;
    }
    const memberEmails = Array.isArray(members)
      ? members.map((member) => member.email)
      : [];

    for (const mem of memberEmails) {
      const email = mem;
      await sendBrocures(email, teamName);
    }
  } catch (error) {
    console.error("Error sending mass mail for brochures:", error);
  }
};
