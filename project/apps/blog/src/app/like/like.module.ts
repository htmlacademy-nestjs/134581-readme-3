import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { LikeMemoryRepository } from './like.memory-repository';

@Module({
  controllers: [LikeController],
  providers: [LikeService, LikeMemoryRepository],
})
export class LikeModule {}
