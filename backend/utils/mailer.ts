//@ts-ignore
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  pool: true,
  maxConnections: 11,
  maxMessages: Infinity,
  host: "smtp.gmail.com",
  port: 456,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendEmailToLeader = async (
  leaderEmail: string,
  teamName: string,
  password: string
) => {
  try {
    const mailOption = {
      from: process.env.MAIL_USER,
      to: leaderEmail,
      subject: `Registration successfull for team ${teamName}`,
      text: `Dear Team Leader,\n\nThis is an update regarding the team "${teamName}".\n\nYour auto-generated password for login is: ${password}\n\nBest regards,\nYour Team`,
    };
    await transporter.sendMail(mailOption);
    return true;
  } catch (error) {
    console.error("Error sending email to leader with password:", error);
    return false;
  }
};
