import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class VideoPostRdo extends BasePostRdo {
  @ApiProperty({
    description: 'The post title',
    example: 'Video Title',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'The video link',
    example: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  })
  @Expose()
  videoLink: string;
}
