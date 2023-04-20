import { TagEntity } from './tag.entity';
import { Tag } from '@project/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TagRepository implements CRUDRepository<TagEntity, string, Tag> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: TagEntity): Promise<Tag> {
    return this.prisma.tag.create({
      data: { ...item.toObject() },
    });
  }

  public async destroy(tagId: string): Promise<void> {
    await this.prisma.tag.delete({
      where: {
        tagId,
      },
    });
  }

  public findById(tagId: string): Promise<Tag | null> {
    return this.prisma.tag.findFirst({
      where: {
        tagId,
      },
    });
  }

  public find(ids: string[] = []): Promise<Tag[]> {
    return this.prisma.tag.findMany({
      where: {
        tagId: {
          in: ids.length > 0 ? ids : undefined,
        },
      },
    });
  }

  public update(tagId: string, item: TagEntity): Promise<Tag> {
    return this.prisma.tag.update({
      where: {
        tagId,
      },
      data: { ...item.toObject(), tagId },
    });
  }
}
