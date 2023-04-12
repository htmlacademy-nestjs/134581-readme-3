import { BadRequestException, Injectable } from '@nestjs/common';
import { Like } from '@project/shared/shared-types';
import { LikeMemoryRepository } from './like.memory-repository';
import { LikeDto } from './dto/like.dto';
import { LikeEntity } from './like.entity';
import { LikeMessage } from './like.constant';

@Injectable()
export class LikeService {
  constructor(private readonly likeRepository: LikeMemoryRepository) {}

  async likePost(dto: LikeDto): Promise<Like> {
    const existingLike = await this.likeRepository.findByUserAndPost(
      dto.userId,
      dto.postId
    );

    if (existingLike) {
      throw new BadRequestException(LikeMessage.USER_HAS_ALREADY_LIKED);
    }

    const like = new LikeEntity(dto);

    return this.likeRepository.create(like);
  }

  async unlikePost(userId: string, postId: string): Promise<void> {
    const like = await this.likeRepository.findByUserAndPost(userId, postId);

    if (!like) {
      throw new BadRequestException(LikeMessage.USER_HAS_NOT_LIKED);
    }
    console.log('FOUND LIKE');

    await this.likeRepository.deleteByUserAndPost(userId, postId);
  }
}
