-- CreateTable
CREATE TABLE "comments" (
    "comment_id" TEXT NOT NULL,
    "post_id" TEXT,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);
