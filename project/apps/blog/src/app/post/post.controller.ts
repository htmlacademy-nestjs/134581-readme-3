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
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { PostService } from './post.service';
import { PostDto } from './dto/post';
import {
  LinkPostRdo,
  PhotoPostRdo,
  postTypeToRdoClass,
  QuotePostRdo,
  TextPostRdo,
  VideoPostRdo,
} from './rdo/post';
import { BasePostRdo } from './rdo/post/base-post.rdo';
import { BasePost } from '@project/shared/shared-types';
import { DeletePostResponseRdo } from './rdo/delete-post-response.rdo';
import { PostMessage } from './post.constant';
import { RepostPostDto } from './dto/repost-post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The post has been successfully created.',
    type: BasePostRdo,
  })
  @ApiExtraModels(
    TextPostRdo,
    VideoPostRdo,
    QuotePostRdo,
    PhotoPostRdo,
    LinkPostRdo
  )
  @Post('/')
  public async create(@Body() dto: PostDto) {
    const newPost = await this.postService.createPost(dto);
    const rdoClass = postTypeToRdoClass[newPost.postType];
    return fillObject<BasePostRdo, BasePost>(rdoClass, newPost);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully updated.',
    type: BasePostRdo,
  })
  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() dto: PostDto
  ): Promise<BasePostRdo> {
    const updatedPost = await this.postService.updatePost(id, dto);
    const rdoClass = postTypeToRdoClass[updatedPost.postType];
    return fillObject<BasePostRdo, BasePost>(rdoClass, updatedPost);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully deleted.',
    type: DeletePostResponseRdo,
  })
  @Delete('/:id')
  public async delete(@Param('id') id: string): Promise<DeletePostResponseRdo> {
    const deletedId = await this.postService.deletePost(id);

    return fillObject(DeletePostResponseRdo, {
      message: PostMessage.POST_DELETE_SUCCESS,
      id: deletedId,
    });
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully fetched.',
    type: BasePostRdo,
  })
  @Get('/:id')
  public async getById(@Param('id') id: string) {
    const post = await this.postService.getPostById(id);
    const rdoClass = postTypeToRdoClass[post.postType];
    return fillObject<BasePostRdo, BasePost>(rdoClass, post);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully reposted.',
    type: BasePostRdo,
  })
  @Post('/repost/:id')
  public async repost(@Param('id') id: string, @Body() dto: RepostPostDto) {
    const repostedPost = await this.postService.repostPost(id, dto.newAuthorId);
    const rdoClass = postTypeToRdoClass[repostedPost.postType];
    return fillObject<BasePostRdo, BasePost>(rdoClass, repostedPost);
  }
}
