import { Injectable } from '@nestjs/common';
import { Like } from '@project/shared/shared-types';
import { LikeEntity } from './like.entity';
import { PrismaService } from '../prisma/prisma.service';
import Prisma from '@prisma/client';

@Injectable()
export class LikeRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: LikeEntity): Promise<Like> {
    const entityData = item.toObject();
    return this.prisma.like.create({
      data: {
        ...entityData,
      },
    });
  }

  public async findByUserAndPost(
    userId: string,
    postId: string
  ): Promise<Like | null> {
    return this.prisma.like.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });
  }

  public async deleteByUserAndPost(
    userId: string,
    postId: string
  ): Promise<void> {
    await this.prisma.like.delete({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });
  }
}
