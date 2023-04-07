import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { fillObject } from '@project/util/util-core';
import { PostService } from './post.service';
import { PostDto } from './dto/post';
import { postTypeToRdoClass } from './rdo/post';
import { BasePostRdo } from './rdo/post/base-post.rdo';
import { BasePost } from '@project/shared/shared-types';

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
}
