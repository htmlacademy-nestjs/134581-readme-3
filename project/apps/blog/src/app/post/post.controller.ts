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
import { PostService } from './post.service';
import { PostDto } from './dto/post';
import { postTypeToRdoClass } from './rdo/post';
import { BasePostRdo } from './rdo/post/base-post.rdo';
import { BasePost } from '@project/shared/shared-types';
import { DeletePostResponseRdo } from './rdo/delete-post-response.rdo';
import { POST_DELETE_SUCCESS } from './post.constant';
import { RepostPostDto } from './dto/repost-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  public async create(@Body() dto: PostDto) {
    const newPost = await this.postService.createPost(dto);
    const rdoClass = postTypeToRdoClass[newPost.postType];
    return fillObject<BasePostRdo, BasePost>(rdoClass, newPost);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() dto: PostDto
  ): Promise<BasePostRdo> {
    const updatedPost = await this.postService.updatePost(id, dto);
    const rdoClass = postTypeToRdoClass[updatedPost.postType];
    return fillObject<BasePostRdo, BasePost>(rdoClass, updatedPost);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string): Promise<DeletePostResponseRdo> {
    const deletedId = await this.postService.deletePost(id);

    return fillObject(DeletePostResponseRdo, {
      message: POST_DELETE_SUCCESS,
      id: deletedId,
    });
  }

  @Get('/:id')
  public async getById(@Param('id') id: string) {
    const post = await this.postService.getPostById(id);
    const rdoClass = postTypeToRdoClass[post.postType];
    return fillObject<BasePostRdo, BasePost>(rdoClass, post);
  }

  @Post('/repost/:id')
  public async repost(@Param('id') id: string, @Body() dto: RepostPostDto) {
    const repostedPost = await this.postService.repostPost(id, dto.newAuthorId);
    const rdoClass = postTypeToRdoClass[repostedPost.postType];
    return fillObject<BasePostRdo, BasePost>(rdoClass, repostedPost);
  }
}
