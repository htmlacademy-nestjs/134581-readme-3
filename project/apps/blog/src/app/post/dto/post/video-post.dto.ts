import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VideoPostDto extends BasePostDto {
  @ApiProperty({
    description: 'Post type',
    example: PostType.VIDEO,
    enum: PostType,
  })
  postType: PostType.VIDEO;

  @ApiProperty({
    description: 'The post title',
    example: 'Video Title',
  })
  title: string;

  @ApiProperty({
    description: 'The video link',
    example: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  })
  videoLink: string;
}
