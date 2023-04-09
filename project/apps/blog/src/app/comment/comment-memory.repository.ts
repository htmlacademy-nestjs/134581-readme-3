import crypto from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { Comment } from '@project/shared/shared-types';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentMemoryRepository
  implements CRUDRepository<CommentEntity, string, Comment>
{
  private repository: { [key: string]: Comment } = {};

  private save(item: Comment, id?: string): Comment {
    const entry = { ...item, _id: id || crypto.randomUUID() };
    this.repository[entry._id] = entry;
    return { ...entry };
  }
  public async create(item: CommentEntity): Promise<Comment> {
    return this.save(item.toObject());
  }

  public async findByPostId(postId: string): Promise<Comment[]> {
    return Object.values(this.repository).filter(
      (comment) => comment.postId === postId
    );
  }

  public async findById(id: string): Promise<Comment> {
    return this.repository[id] ? { ...this.repository[id] } : null;
  }

  public async update(id: string, item: CommentEntity): Promise<Comment> {
    return this.save(item.toObject(), id);
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }
}
