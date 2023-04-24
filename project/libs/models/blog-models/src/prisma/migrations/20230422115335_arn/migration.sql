/*
  Warnings:

  - The values [IMAGE] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[user_id,post_id]` on the table `likes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('TEXT', 'PHOTO', 'VIDEO', 'QUOTE', 'LINK');
ALTER TABLE "posts" ALTER COLUMN "post_type" TYPE "PostType_new" USING ("post_type"::text::"PostType_new");
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "PostType_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "likes_user_id_post_id_key" ON "likes"("user_id", "post_id");
