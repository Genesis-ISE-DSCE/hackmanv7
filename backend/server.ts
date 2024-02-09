import { PrismaClient } from "@prisma/client";
import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler";
dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port: number = Number(process.env.PORT) || 8000;
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use(errorHandler);

app.listen(port, () => console.log("Server is running at " + port));

async function shutdown() {
  await prisma.$disconnect();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
