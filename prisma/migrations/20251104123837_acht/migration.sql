-- AlterEnum
ALTER TYPE "public"."Role" ADD VALUE 'RESELLER';

-- AlterTable
ALTER TABLE "public"."invitations" ADD COLUMN     "bride_name" TEXT,
ADD COLUMN     "expires_at" TIMESTAMP(3),
ADD COLUMN     "groom_name" TEXT,
ADD COLUMN     "hashtag" TEXT,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "wedding_date" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;
