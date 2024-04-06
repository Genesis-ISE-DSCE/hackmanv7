/*
  Warnings:

  - You are about to drop the column `isLead` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `leaderEmail` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `upiId` on the `Team` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[leaderId]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `leaderId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Team_transactionId_key";

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "isLead";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "leaderEmail",
DROP COLUMN "transactionId",
DROP COLUMN "upiId",
ADD COLUMN     "leaderId" TEXT NOT NULL,
ADD COLUMN     "paymentPic" TEXT;

-- CreateTable
CREATE TABLE "Leader" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Leader_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Leader_email_key" ON "Leader"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Team_leaderId_key" ON "Team"("leaderId");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "Leader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
