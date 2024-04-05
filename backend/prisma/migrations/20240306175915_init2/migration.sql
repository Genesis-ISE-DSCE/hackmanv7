/*
  Warnings:

  - Added the required column `leaderEmail` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "leaderEmail" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
