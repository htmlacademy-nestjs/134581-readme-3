import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from '@project/shared/shared-types';
import { CommentEntity } from './comment.entity';
import { CommentMemoryRepository } from './comment-memory.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { COMMENT_NOT_FOUND_ERROR } from './comment.constant';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentMemoryRepository) {}

  async createComment(commentDto: CreateCommentDto): Promise<Comment> {
    const commentEntity = new CommentEntity({
      ...commentDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.commentRepository.create(commentEntity);
  }
  async findByPostId(postId: string): Promise<Comment[]> {
    return this.commentRepository.findByPostId(postId);
  }
  async findById(id: string): Promise<Comment> {
    const comment = await this.commentRepository.findById(id);

    if (!comment) {
      throw new NotFoundException(COMMENT_NOT_FOUND_ERROR(id));
    }

    return comment;
  }

  async update(id: string, commentDto: CreateCommentDto): Promise<Comment> {
    const existingComment = await this.commentRepository.findById(id);

    if (!existingComment) {
      throw new NotFoundException(COMMENT_NOT_FOUND_ERROR(id));
    }

    const updatedCommentEntity = new CommentEntity({
      ...existingComment,
      ...commentDto,
      updatedAt: new Date(),
    });

    return this.commentRepository.update(id, updatedCommentEntity);
  }

  async delete(id: string): Promise<string> {
    const comment = await this.commentRepository.findById(id);

    if (!comment) {
      throw new NotFoundException(COMMENT_NOT_FOUND_ERROR(id));
    }

    return id;
  }

  async deleteCommentsByPostId(postId: string): Promise<void> {
    const comments = await this.commentRepository.findByPostId(postId);

    for (const comment of comments) {
      await this.commentRepository.destroy(comment._id);
    }
  }
}
