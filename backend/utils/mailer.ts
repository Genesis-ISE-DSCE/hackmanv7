//@ts-ignore
import fs from "fs";
import { db } from "./db";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { tryCatch } from "bullmq";
var path = require("path");
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
    const imageAttachment = {
      filename: "PaymentQRCode",
      path: "./dist/assets/PaymentQRCode.jpeg",
    };

    const mailOption = {
      from: process.env.MAIL_USER,
      to: leaderEmail,
      subject: `Hackman Awaits: Time to Complete Your Registration team ${teamName}`,
      html: `
      <p>Dear Team Leader,</p>
      <p>Thank you for your interest in participating in Hackman. Please find below the QR code for the payment of ₹600. Once you’ve made the payment, use the credentials below to log into your user page and complete your registration:</p>
      <p>Username: "${leaderEmail}"</p>
      <p>Password: "${password}"\</p>
      <a href="https://hackman.in/userlogin" target="_blank">Login here</a>
      <p>Don’t forget to upload a screenshot of your payment receipt on your user page. This is crucial to confirm your spot!</p>
      <p>We're excited to see the innovative ideas you and your team will bring to Hackman. If you run into any issues or have questions, give us a shout at genesis.hackman@gmail.com</p>
      <p> </p>
      <p>Best regards,</p>
      <p>Team Hackman</p>
      `,
      attachments: [imageAttachment],
    };
    await transporter.sendMail(mailOption);
    return true;
  } catch (error) {
    console.error("Error sending email to leader with password:", error);
    return false;
  }
};

export const paymentConfirmation = async (
  leaderEmail: string,
  teamName: string,
  password: string
) => {
  try {
    const mailOption = {
      from: process.env.MAIL_USER,
      to: leaderEmail,
      subject: `Welcome to Hackman! Your Payment is Successful team ${teamName}`,
      html: `
      <p>Dear Team Leader,</p>
      <p>Congratulations! Your payment has been successfully processed, and we are excited to welcome you to Hackman. We can't wait to see the innovative ideas you and your team will bring to the event. Attached to this email, you will find a detailed instructions document to help you prepare and make the most of your Hackman experience.</p>
      <p>To stay updated and connected with other participants, join our Hackman WhatsApp group:</p>
      <a href="https://hackman.in/userlogin" target="_blank">Whatsapp Link</a>
      <p>If you have any questions or need further assistance, please feel free to reach out to us at genesis.hackman@gmail.com</p>
      <p>Welcome aboard, and let's get ready to hack!</p>
      <p> </p>
      <p>Best regards,</p>
      <p>Team Hackman</p>
      `,
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

// const verfyMail = async (leaderEmail: string) => {
//   try {
//     const mailOption = {
//       from: process.env.MAIL_USER,
//       to: leaderEmail,
//       subject: "Verification of registration",
//     };
//   } catch (error) {}

// };
