import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { fillObject } from '@project/util/util-core';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRdo } from './rdo/comment.rdo';
import { COMMENT_DELETE_SUCCESS } from './comment.constant';
import { CommentDeleteRdo } from './rdo/comment-delete.rdo';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Post()
  public async create(
    @Body() createCommentDto: CreateCommentDto
  ): Promise<CommentRdo> {
    const comment = await this.commentService.createComment(createCommentDto);
    return fillObject(CommentRdo, comment);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() dto: CommentRdo
  ): Promise<CommentRdo> {
    const comment = await this.commentService.update(id, dto);
    return fillObject(CommentRdo, comment);
  }

  @Get('/:id')
  public async findById(@Param('id') id: string): Promise<CommentRdo> {
    const comment = await this.commentService.findById(id);
    return fillObject(CommentRdo, comment);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string): Promise<CommentDeleteRdo> {
    const deletedId = await this.commentService.delete(id);
    return fillObject(CommentDeleteRdo, {
      message: COMMENT_DELETE_SUCCESS,
      id: deletedId,
    });
  }

  @Get('/post/:postId')
  public async findByPostId(
    @Param('postId') postId: string
  ): Promise<CommentRdo[]> {
    const comments = await this.commentService.findByPostId(postId);
    return comments.map((comment) => fillObject(CommentRdo, comment));
  }
}
