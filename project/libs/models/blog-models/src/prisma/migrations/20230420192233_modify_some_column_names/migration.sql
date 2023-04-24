/*
  Warnings:

  - The primary key for the `posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `posts` table. All the data in the column will be lost.
  - The required column `post_id` was added to the `posts` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "posts" DROP CONSTRAINT "posts_pkey",
DROP COLUMN "authorId",
DROP COLUMN "id",
ADD COLUMN     "author_id" TEXT,
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("post_id");
