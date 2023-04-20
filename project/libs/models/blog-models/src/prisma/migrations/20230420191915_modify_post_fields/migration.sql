/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "authorId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publish_at" TIMESTAMP(3) NOT NULL,
    "origin" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tags" TEXT[],
    "post_type" "PostType" NOT NULL,
    "title" TEXT,
    "excerpt" TEXT,
    "text" TEXT,
    "image_url" TEXT,
    "video_url" TEXT,
    "quote" TEXT,
    "quoted_author" TEXT,
    "link_url" TEXT,
    "link_title" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
