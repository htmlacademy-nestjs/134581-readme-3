import { Body, Controller, Post } from '@nestjs/common';
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
}
