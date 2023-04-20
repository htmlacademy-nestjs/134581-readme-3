import crypto from 'node:crypto';
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
  PostOriginType,
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
import { PostMessage } from './post.constant';
import { CommentService } from '../comment/comment.service';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostMemoryRepository,
    private readonly commentService: CommentService
  ) {}

  private createPostEntity(updatedPost: BasePost) {
    let postEntity: BasePostEntity;
    switch (updatedPost.postType) {
      case PostType.VIDEO:
        postEntity = new VideoPostEntity(updatedPost as VideoPost);
        break;
      case PostType.TEXT:
        postEntity = new TextPostEntity(updatedPost as TextPost);
        break;
      case PostType.QUOTE:
        postEntity = new QuotePostEntity(updatedPost as QuotePost);
        break;
      case PostType.PHOTO:
        postEntity = new PhotoPostEntity(updatedPost as PhotoPost);
        break;
      case PostType.LINK:
        postEntity = new LinkPostEntity(updatedPost as LinkPost);
        break;
      default:
        throw new BadRequestException(PostMessage.INVALID_POST_TYPE);
    }
    return postEntity;
  }

  async createPost(postDto: PostDto): Promise<BasePost> {
    const post = {
      ...postDto,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const postEntity = this.createPostEntity(post);

    return this.postRepository.create(postEntity);
  }

  async updatePost(id: string, postDto: PostDto): Promise<BasePost> {
    const existingPost = await this.postRepository.findById(id);
    if (!existingPost) {
      throw new NotFoundException(PostMessage.POST_NOT_FOUND);
    }

    const updatedPost = {
      ...existingPost,
      ...postDto,
      updatedAt: Date.now(),
    };
    let postEntity = this.createPostEntity(updatedPost);

    return this.postRepository.update(id, postEntity);
  }

  async deletePost(id: string): Promise<string> {
    const existingPost = await this.postRepository.findById(id);
    if (!existingPost) {
      throw new NotFoundException(PostMessage.POST_NOT_FOUND);
    }

    await this.commentService.deleteCommentsByPostId(id);

    await this.postRepository.destroy(id);

    return id;
  }

  async getPostById(id: string): Promise<BasePost> {
    const post = await this.postRepository.findById(id);
    if (!post) {
      throw new NotFoundException(PostMessage.POST_NOT_FOUND);
    }
    return post;
  }

  async repostPost(id: string, newAuthorId: string): Promise<BasePost> {
    const originalPost = await this.postRepository.findById(id);
    if (!originalPost) {
      throw new NotFoundException(PostMessage.POST_NOT_FOUND);
    }

    if (originalPost.origin !== PostOriginType.Created) {
      throw new BadRequestException(PostMessage.REPOST_FORBIDDEN);
    }

    const originalPostEntity = this.createPostEntity(originalPost);

    const newPost = originalPostEntity.copy(newAuthorId);
    newPost.createdAt = Date.now();
    newPost.updatedAt = Date.now();

    return this.postRepository.create(newPost);
  }
}
