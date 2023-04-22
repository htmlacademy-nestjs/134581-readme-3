import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { Comment } from '@project/shared/shared-types';
import { CommentEntity } from './comment.entity';
import { PrismaService } from '../prisma/prisma.service';
import Prisma from '@prisma/client';

@Injectable()
export class CommentRepository
  implements CRUDRepository<CommentEntity, string, Comment>
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: CommentEntity): Promise<Comment> {
    const entityData = item.toObject();
    return this.prisma.comment.create({
      data: {
        ...entityData,
      },
    });
  }

  public async findByPostId(postId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: {
        postId,
      },
    });
  }

  public async findById(commentId: string): Promise<Comment | null> {
    return this.prisma.comment.findUnique({
      where: {
        commentId,
      },
    });
  }

  public async update(
    commentId: string,
    item: CommentEntity
  ): Promise<Comment> {
    const entityData = item.toObject();
    return this.prisma.comment.update({
      where: {
        commentId,
      },
      data: {
        ...entityData,
      },
    });
  }

  public async destroy(commentId: string): Promise<void> {
    await this.prisma.comment.delete({
      where: {
        commentId,
      },
    });
  }
}
