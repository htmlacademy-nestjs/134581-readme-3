import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRdo } from './rdo/comment.rdo';
import { COMMENT_DELETE_SUCCESS } from './comment.constant';
import { CommentDeleteRdo } from './rdo/comment-delete.rdo';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The comment has been successfully created.',
    type: CommentRdo,
  })
  @Post()
  public async create(
    @Body() createCommentDto: CreateCommentDto
  ): Promise<CommentRdo> {
    const comment = await this.commentService.createComment(createCommentDto);
    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The comment has been successfully updated.',
    type: CommentRdo,
  })
  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() dto: CommentRdo
  ): Promise<CommentRdo> {
    const comment = await this.commentService.update(id, dto);
    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The comment has been successfully retrieved.',
    type: CommentRdo,
  })
  @Get('/:id')
  public async findById(@Param('id') id: string): Promise<CommentRdo> {
    const comment = await this.commentService.findById(id);
    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The comment has been successfully deleted.',
    type: CommentDeleteRdo,
  })
  @Delete('/:id')
  public async delete(@Param('id') id: string): Promise<CommentDeleteRdo> {
    const deletedId = await this.commentService.delete(id);
    return fillObject(CommentDeleteRdo, {
      message: COMMENT_DELETE_SUCCESS,
      id: deletedId,
    });
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Array of comments has been successfully retrieved.',
    type: [CommentRdo],
  })
  @Get('/post/:postId')
  public async findByPostId(
    @Param('postId') postId: string
  ): Promise<CommentRdo[]> {
    const comments = await this.commentService.findByPostId(postId);
    return comments.map((comment) => fillObject(CommentRdo, comment));
  }
}
