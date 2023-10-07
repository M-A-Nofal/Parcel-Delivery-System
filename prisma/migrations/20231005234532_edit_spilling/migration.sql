/*
  Warnings:

  - You are about to drop the column `dropofAddress` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `sinderId` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `dropoffAddress` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_sinderId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "dropofAddress",
DROP COLUMN "sinderId",
ADD COLUMN     "dropoffAddress" TEXT NOT NULL,
ADD COLUMN     "senderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Sender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
