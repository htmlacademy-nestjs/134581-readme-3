import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
import { PostDto } from './dto/post';
import { INVALID_POST_TYPE, POST_NOT_FOUND } from './post.constant';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostMemoryRepository) {}

  private createPostEntity(updatedPost: Post) {
    let postEntity: BasePostEntity;
    switch (updatedPost.postType) {
      case PostType.Video:
        postEntity = new VideoPostEntity(updatedPost as VideoPost);
        break;
      case PostType.Text:
        postEntity = new TextPostEntity(updatedPost as TextPost);
        break;
      case PostType.Quote:
        postEntity = new QuotePostEntity(updatedPost as QuotePost);
        break;
      case PostType.Photo:
        postEntity = new PhotoPostEntity(updatedPost as PhotoPost);
        break;
      case PostType.Link:
        postEntity = new LinkPostEntity(updatedPost as LinkPost);
        break;
      default:
        throw new BadRequestException(INVALID_POST_TYPE);
    }
    return postEntity;
  }

  async createPost(postDto: PostDto): Promise<BasePost> {
    const post = {
      ...postDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const postEntity = this.createPostEntity(post);

    return this.postRepository.create(postEntity);
  }

  async updatePost(id: string, postDto: PostDto): Promise<BasePost> {
    const existingPost = await this.postRepository.findById(id);
    if (!existingPost) {
      throw new NotFoundException(POST_NOT_FOUND);
    }

    const updatedPost = {
      ...existingPost,
      ...postDto,
      updatedAt: new Date(),
    };
    let postEntity = this.createPostEntity(updatedPost);

    return this.postRepository.update(id, postEntity);
  }

  async deletePost(id: string): Promise<string> {
    const existingPost = await this.postRepository.findById(id);
    if (!existingPost) {
      throw new NotFoundException(POST_NOT_FOUND);
    }

    await this.postRepository.destroy(id);

    return id;
  }
}
