import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CommentModule } from '../comment/comment.module';
import { PostRepository } from './post.repository';
import { TagModule } from '../tag/tag.module';

@Module({
  imports: [CommentModule, TagModule],
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule {}
