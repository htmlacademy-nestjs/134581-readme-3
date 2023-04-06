import { Injectable } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository';
import {
  BasePost,
  LinkPost,
  PhotoPost,
  Post,
  PostType,
  QuotePost,
  TextPost,
  VideoPost,
} from '@project/shared/shared-types';
import { BasePostEntity } from './entities/base-post.entity';
import { VideoPostEntity } from './entities/video-post.entity';
import { TextPostEntity } from './entities/text-post.entity';
import { QuotePostEntity } from './entities/quote-text.entity';
import { PhotoPostEntity } from './entities/photo-post.entity';
import { LinkPostEntity } from './entities/link-post.entity';
import { PostDto } from './dto';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostMemoryRepository) {}

  async createPost(post: PostDto): Promise<BasePost> {
    let postEntity: BasePostEntity;

    switch (post.postType) {
      case PostType.Video:
        postEntity = new VideoPostEntity(post as VideoPost);
        break;
      case PostType.Text:
        postEntity = new TextPostEntity(post as TextPost);
        break;
      case PostType.Quote:
        postEntity = new QuotePostEntity(post as QuotePost);
        break;
      case PostType.Photo:
        postEntity = new PhotoPostEntity(post as PhotoPost);
        break;
      case PostType.Link:
        postEntity = new LinkPostEntity(post as LinkPost);
        break;
      default:
        throw new Error('Invalid post type');
    }

    return this.postRepository.create(postEntity);
  }
}
