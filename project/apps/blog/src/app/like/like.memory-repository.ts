import { Like } from '@project/shared/shared-types';
import { LikeEntity } from './like.entity';

export class LikeMemoryRepository {
  private repository: Record<string, Like> = {};

  public async create(item: LikeEntity): Promise<Like> {
    const id = `${item.userId}-${item.postId}`;
    this.repository[id] = item;
    return item;
  }

  public async findByUserAndPost(
    userId: string,
    postId: string
  ): Promise<Like | null> {
    const id = `${userId}-${postId}`;
    return this.repository[id] || null;
  }

  public async deleteByUserAndPost(
    userId: string,
    postId: string
  ): Promise<void> {
    const id = `${userId}-${postId}`;
    delete this.repository[id];
  }
}
