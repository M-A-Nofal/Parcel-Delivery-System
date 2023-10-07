-- CreateTable
CREATE TABLE "Sender" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Sender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Biker" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Biker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "sinderId" TEXT NOT NULL,
    "bikerId" TEXT,
    "pickupAddress" TEXT NOT NULL,
    "dropofAddress" TEXT NOT NULL,
    "pickupTimestamp" TIMESTAMP(3),
    "deliveryTimestamp" TIMESTAMP(3),
    "status" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sender_email_key" ON "Sender"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Biker_email_key" ON "Biker"("email");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_sinderId_fkey" FOREIGN KEY ("sinderId") REFERENCES "Sender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_bikerId_fkey" FOREIGN KEY ("bikerId") REFERENCES "Biker"("id") ON DELETE SET NULL ON UPDATE CASCADE;
