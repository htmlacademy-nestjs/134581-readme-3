import { Body, Controller, Post } from '@nestjs/common';
import { fillObject } from '@project/util/util-core';
import { PostService } from './post.service';
import { PostDto } from './dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  public async create(@Body() dto: PostDto) {
    const newPost = await this.postService.createPost(dto);
    // return fillObject(PostRdo, newPost);
  }
}
