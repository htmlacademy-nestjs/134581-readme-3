import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { fillObject } from '@project/util/util-core';
import { LikeService } from './like.service';
import { LikeRdo } from './rdo/like.rdo';
import { LikeDto } from './dto/like.dto';
import { UnlikePostRdo } from './rdo/unlike-post.rdo';
import { LIVE_REMOVED_SUCCESSFULLY } from './like.constant';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post('/')
  public async likePost(@Body() dto: LikeDto): Promise<LikeRdo> {
    const like = await this.likeService.likePost(dto);
    return fillObject(LikeRdo, like);
  }

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
