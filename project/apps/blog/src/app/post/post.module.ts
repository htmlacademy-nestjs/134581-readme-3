import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostMemoryRepository } from './post-memory.repository';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [CommentModule],
  controllers: [PostController],
  providers: [PostService, PostMemoryRepository],
})
export class PostModule {}
