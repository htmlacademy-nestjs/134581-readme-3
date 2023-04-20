/*
  Warnings:

  - Changed the type of `origin` on the `posts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `posts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "PostOrigin" AS ENUM ('CREATED', 'REPOSTED');

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "origin",
ADD COLUMN     "origin" "PostOrigin" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "PostStatus" NOT NULL;
