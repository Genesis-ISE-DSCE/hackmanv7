import { PrismaClient } from "@prisma/client";
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const prisma = new PrismaClient();
const app = express();
const port: number = Number(process.env.PORT) || 8000;
app.use(express.json())
async function main() {
    //here comes our queries
}
main().then(async () => {
    await prisma.$disconnect();
})
    .catch(async (error) => {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);
    })
app.listen(port, () => console.log('Server is running at ' + port))