import Prisma from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { BasePostEntity } from './entities/base-post.entity';
import {
  Post,
  PostOriginType,
  PostStatusType,
  PostType,
} from '@project/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { PostQuery } from './query/post.query';

type PrismaPostWithRelations = Prisma.Post & {
  tags: Prisma.Tag[];
  comments: Prisma.Comment[];
  likes: Prisma.Like[];
};

@Injectable()
export class PostRepository
  implements CRUDRepository<BasePostEntity, string, Post>
{
  constructor(private readonly prisma: PrismaService) {}

  public mapPrismaPostToAppPost(prismaPost: PrismaPostWithRelations): Post {
    return {
      ...prismaPost,
      postType: prismaPost.postType as PostType,
      origin: prismaPost.origin as PostOriginType,
      status: prismaPost.status as PostStatusType,
      tags: prismaPost.tags,
      comments: [],
      likes: [],
    };
  }

  public async create(item: BasePostEntity): Promise<Post> {
    const entityData = item.toObject();
    const prismaPost = await this.prisma.post.create({
      data: {
        ...entityData,
        comments: {
          connect: [],
        },
        likes: {
          connect: [],
        },
        tags: {
          connect: entityData.tags.map(({ tagId }) => ({ tagId })),
        },
      },
      include: {
        tags: true,
        comments: true,
        likes: true,
      },
    });

    return this.mapPrismaPostToAppPost(prismaPost);
  }

  public async destroy(postId: string): Promise<void> {
    await this.prisma.post.delete({
      where: {
        postId,
      },
    });
  }

  public async findById(postId: string): Promise<Post | null> {
    const prismaPost = await this.prisma.post.findFirst({
      where: {
        postId,
      },
      include: {
        tags: true,
        comments: true,
        likes: true,
      },
    });

    if (!prismaPost) {
      return null;
    }

    return this.mapPrismaPostToAppPost(prismaPost);
  }

  public async find({
    limit,
    tags,
    sortDirection,
    page,
  }: PostQuery): Promise<Post[]> {
    const prismaPosts = await this.prisma.post.findMany({
      where: {
        tags: {
          some: {
            tagId: {
              in: tags,
            },
          },
        },
      },
      take: limit,
      include: {
        tags: true,
        comments: true,
        likes: true,
      },
      orderBy: [{ createdAt: sortDirection }],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });

    return prismaPosts.map(this.mapPrismaPostToAppPost);
  }

  public async update(postId: string, item: BasePostEntity): Promise<Post> {
    const entityData = item.toObject();
    const prismaPost = await this.prisma.post.update({
      where: {
        postId,
      },
      data: {
        ...entityData,
        comments: {
          connect: [],
        },
        likes: {
          connect: [],
        },
        tags: {
          set: entityData.tags.map(({ tagId }) => ({ tagId })),
        },
      },
      include: {
        tags: true,
        comments: true,
        likes: true,
      },
    });

    return this.mapPrismaPostToAppPost(prismaPost);
  }
}
