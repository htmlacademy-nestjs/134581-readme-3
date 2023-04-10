import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { LikeService } from './like.service';
import { LikeRdo } from './rdo/like.rdo';
import { LikeDto } from './dto/like.dto';
import { UnlikePostRdo } from './rdo/unlike-post.rdo';
import { LIVE_REMOVED_SUCCESSFULLY } from './like.constant';

@ApiTags('likes')
@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The post has been successfully liked.',
    type: LikeRdo,
  })
  @Post('/')
  public async likePost(@Body() dto: LikeDto): Promise<LikeRdo> {
    const like = await this.likeService.likePost(dto);
    return fillObject(LikeRdo, like);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully unliked.',
    type: UnlikePostRdo,
  })
  @Delete('/:postId/user/:userId')
  public async unlikePost(
    @Param('userId') userId: string,
    @Param('postId') postId: string
  ): Promise<UnlikePostRdo> {
    await this.likeService.unlikePost(userId, postId);

    return fillObject(UnlikePostRdo, {
      message: LIVE_REMOVED_SUCCESSFULLY,
      userId,
      postId,
    });
  }
}
