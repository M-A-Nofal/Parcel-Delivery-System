/*
  Warnings:

  - Added the required column `name` to the `Biker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Sender` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Biker" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'biker',
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sender" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'sinder',
ADD COLUMN     "name" TEXT NOT NULL;
