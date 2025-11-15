/*
  Warnings:

  - You are about to drop the column `transaction_id` on the `invitations` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[xendit_id]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."invitations" DROP CONSTRAINT "invitations_transaction_id_fkey";

-- DropIndex
DROP INDEX "public"."invitations_transaction_id_key";

-- AlterTable
ALTER TABLE "public"."invitations" DROP COLUMN "transaction_id";

-- AlterTable
ALTER TABLE "public"."transactions" ADD COLUMN     "invoice_url" TEXT,
ADD COLUMN     "xendit_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "transactions_xendit_id_key" ON "public"."transactions"("xendit_id");
