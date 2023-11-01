/*
  Warnings:

  - You are about to drop the `Character` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Character";

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);
