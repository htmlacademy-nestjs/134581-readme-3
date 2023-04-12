import crypto from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { BasePost } from '@project/shared/shared-types';
import { BasePostEntity } from './entities/base-post.entity';

@Injectable()
export class PostMemoryRepository
  implements CRUDRepository<BasePostEntity, string, BasePost>
{
  private repository: Record<string, BasePost> = {};

  public async create(item: BasePostEntity): Promise<BasePost> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;

    return { ...entry };
  }

  public async findById(id: string): Promise<BasePost> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: BasePostEntity): Promise<BasePost> {
    this.repository[id] = { ...item.toObject(), _id: id };
    return this.findById(id);
  }
}
