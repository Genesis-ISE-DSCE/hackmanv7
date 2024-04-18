import { Queue } from "bullmq";
import { Worker } from "bullmq";
import dotenv from "dotenv";
import { sendEmailToLeader } from "./mailer";
import IORedis from "ioredis";
dotenv.config();

const redisConnection = new IORedis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null,
  tls: {
    host: process.env.REDIS_HOST,
  },
});

export const emailQueue = new Queue("emailQueue", {
  connection: redisConnection,
});

export async function addJobs(emailOptions: {
  password: string;
  email: string;
  teamName: string;
}) {
  console.log(process.env.MAIL_USER);
  console.log(process.env.MAIL_PASSWORD);
  const res = await emailQueue.add("sendEmail", {
    password: emailOptions.password,
    email: emailOptions.email,
    teamName: emailOptions.teamName,
  });

  console.log("Job Added to Queue ", res.id);
}

export const worker = new Worker(
  "emailQueue",
  async (job) => {
    console.log("Got a job --> ", job.id);
    try {
      console.log(job.data);
      await sendEmailToLeader(
        job.data.email,
        job.data.password,
        job.data.teamName
      );

      return Promise.resolve("Success");
    } catch (error) {
      console.error("Error sending email:", error);

      if (job.attemptsMade < 3) {
        return job.retry();
      } else {
        return Promise.reject(new Error("Max retries exceeded"));
      }
    }
  },
  { connection: redisConnection }
);
