import nodemailer from "nodemailer";

const generateRandomPassword = (teamName: string): string => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  const password = `${teamName}${randomNumber}`;

  return password;
};

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

const sendEmailToLeader = async (leaderEmail: string, teamName: string) => {
  try {
    const password = generateRandomPassword(teamName);
    const mailOption = {
      from: process.env.MAIL_USER,
      to: leaderEmail,
      subject: `Registration successfull for team ${teamName}`,
      text: `Dear Team Leader,\n\nThis is an update regarding the team "${teamName}".\n\nYour auto-generated password for login is: ${password}\n\nBest regards,\nYour Team`,
    };

    await transporter.sendMail(mailOption);
    console.log(
      `Email sent to team leader of "${teamName}" with auto-generated password`
    );
  } catch (error) {
    console.error("Error sending email to leader with password:", error);
  }
};

export = {
  sendEmailToLeader,
};
