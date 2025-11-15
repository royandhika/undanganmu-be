/*
  Warnings:

  - You are about to drop the column `address` on the `invitations` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `invitations` table. All the data in the column will be lost.
  - You are about to drop the column `wedding_date` on the `invitations` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Type" AS ENUM ('FREE', 'PREMIUM');

-- CreateEnum
CREATE TYPE "public"."PictureType" AS ENUM ('PROFILE', 'GALLERY');

-- AlterTable
ALTER TABLE "public"."invitations" DROP COLUMN "address",
DROP COLUMN "message",
DROP COLUMN "wedding_date",
ADD COLUMN     "bride_father" TEXT,
ADD COLUMN     "bride_ig" TEXT,
ADD COLUMN     "bride_mother" TEXT,
ADD COLUMN     "event_1_address" TEXT,
ADD COLUMN     "event_1_date" TIMESTAMP(3),
ADD COLUMN     "event_1_name" TEXT,
ADD COLUMN     "event_1_time_end" TEXT,
ADD COLUMN     "event_1_time_start" TEXT,
ADD COLUMN     "event_2_address" TEXT,
ADD COLUMN     "event_2_date" TIMESTAMP(3),
ADD COLUMN     "event_2_name" TEXT,
ADD COLUMN     "event_2_time_end" TEXT,
ADD COLUMN     "event_2_time_start" TEXT,
ADD COLUMN     "groom_father" TEXT,
ADD COLUMN     "groom_ig" TEXT,
ADD COLUMN     "groom_mother" TEXT,
ADD COLUMN     "love_story" TEXT,
ADD COLUMN     "type" "public"."Type" NOT NULL DEFAULT 'FREE';

-- AlterTable
ALTER TABLE "public"."pictures" ADD COLUMN     "picture_type" "public"."PictureType" DEFAULT 'GALLERY';
