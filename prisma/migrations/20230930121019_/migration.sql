/*
  Warnings:

  - You are about to drop the column `name` on the `Biker` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Sender` table. All the data in the column will be lost.
  - Added the required column `name` to the `Biker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Sender` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Biker" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sender" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;
