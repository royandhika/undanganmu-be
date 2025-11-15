/*
  Warnings:

  - You are about to drop the column `total` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `total_amount` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('PENDING', 'PAID', 'CANCELLED');

-- AlterTable
ALTER TABLE "public"."transactions" DROP COLUMN "total",
ADD COLUMN     "status" "public"."Status" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "total_amount" DOUBLE PRECISION NOT NULL;
