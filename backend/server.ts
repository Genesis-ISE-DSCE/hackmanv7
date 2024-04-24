import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { errorHandler } from "./middleware/errorHandler";
import { swaggerDefinition } from "./config/swaggerConfig";
import swaggerJSDoc from "swagger-jsdoc";
import { db } from "./utils/db";
import cors from "cors";

dotenv.config();

export const app = express();

const port: number = Number(process.env.PORT) || 8000;
const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};
const swaggerSpec = swaggerJSDoc(options);

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", require("./routes/auth"));
app.use("/leader", require("./routes/Leader"));
app.use("/admin", require("./routes/Admin"));
app.use(errorHandler);

app.listen(port, () => console.log("Server is running at " + port));

async function shutdown() {
  await db.$disconnect();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
