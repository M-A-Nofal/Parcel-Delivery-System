/*
  Warnings:

  - Added the required column `description` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "description" TEXT NOT NULL;
