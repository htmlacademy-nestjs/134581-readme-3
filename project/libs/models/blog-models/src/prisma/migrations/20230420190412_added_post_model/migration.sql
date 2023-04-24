-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('TEXT', 'IMAGE', 'VIDEO', 'QUOTE', 'LINK');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "authorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "origin" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tags" TEXT[],
    "postType" "PostType" NOT NULL,
    "title" TEXT,
    "excerpt" TEXT,
    "text" TEXT,
    "imageUrl" TEXT,
    "videoUrl" TEXT,
    "quote" TEXT,
    "quotedAuthor" TEXT,
    "linkUrl" TEXT,
    "linkTitle" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
