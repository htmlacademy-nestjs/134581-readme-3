import { Injectable } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository';
import { BasePost, PostType } from '@project/shared/shared-types';
import { BasePostEntity } from './entities/base-post.entity';
import { VideoPostEntity } from './entities/video-post.entity';
import { TextPostEntity } from './entities/text-post.entity';
import { QuotePostEntity } from './entities/quote-text.entity';
import { PhotoPostEntity } from './entities/photo-post.entity';
import { LinkPostEntity } from './entities/link-post.entity';
import { PostDto } from './dto/post';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostMemoryRepository) {}

  async createPost(postDto: PostDto): Promise<BasePost> {
    let postEntity: BasePostEntity;

    const post = {
      ...postDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    switch (post.postType) {
      case PostType.Video:
        postEntity = new VideoPostEntity(post);
        break;
      case PostType.Text:
        postEntity = new TextPostEntity(post);
        break;
      case PostType.Quote:
        postEntity = new QuotePostEntity(post);
        break;
      case PostType.Photo:
        postEntity = new PhotoPostEntity(post);
        break;
      case PostType.Link:
        postEntity = new LinkPostEntity(post);
        break;
      default:
        throw new Error('Invalid post type');
    }

    return this.postRepository.create(postEntity);
  }
}
