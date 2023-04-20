import { PrismaClient, PostType, PostOrigin, PostStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  // Upsert tags
  const tag1 = await prisma.tag.upsert({
    where: { tagId: '1' },
    update: {},
    create: {
      tagId: '1',
      name: 'tech',
    },
  });

  const tag2 = await prisma.tag.upsert({
    where: { tagId: '2' },
    update: {},
    create: {
      tagId: '2',
      name: 'literature',
    },
  });

  // Upsert posts with nested comments and likes
  await prisma.post.upsert({
    where: { postId: '1' },
    update: {},
    create: {
      postId: '1',
      postType: PostType.TEXT,
      title: 'My first blog post',
      text: 'This is my very first blog post.',
      origin: PostOrigin.CREATED,
      status: PostStatus.PUBLISHED,
      tags: {
        connect: {
          tagId: tag1.tagId,
        },
      },
      Comment: {
        create: [
          {
            text: 'This is an amazing blog post!',
            userId: 'user1',
          },
        ],
      },
      Like: {
        create: [
          {
            userId: 'user1',
          },
        ],
      },
    },
  });

  await prisma.post.upsert({
    where: { postId: '2' },
    update: {},
    create: {
      postId: '2',
      postType: PostType.TEXT,
      title: 'My second blog post',
      text: 'This is my second blog post.',
      origin: PostOrigin.CREATED,
      status: PostStatus.PUBLISHED,
      tags: {
        connect: {
          tagId: tag2.tagId,
        },
      },
      Comment: {
        create: [
          {
            text: 'I enjoyed reading this post!',
            userId: 'user2',
          },
        ],
      },
      Like: {
        create: [
          {
            userId: 'user2',
          },
        ],
      },
    },
  });

  console.info('🤘️ Database was filled');
}

fillDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();

    process.exit(1);
  });
