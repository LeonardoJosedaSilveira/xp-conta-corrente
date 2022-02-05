-- CreateEnum
CREATE TYPE "Type" AS ENUM ('CREDIT', 'DEBIT');

-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bankTransition" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" INTEGER NOT NULL,
    "origin" TEXT NOT NULL,

    CONSTRAINT "bankTransition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bankTransition" ADD CONSTRAINT "bankTransition_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
