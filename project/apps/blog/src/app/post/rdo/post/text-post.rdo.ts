import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class TextPostRdo extends BasePostRdo {
  @ApiProperty({
    description: 'The post title',
    example: 'Post Title',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'The post excerpt',
    example: 'Post excerpt',
  })
  @Expose()
  excerpt: string;

  @ApiProperty({
    description: 'The post content',
    example: 'Post content',
  })
  @Expose()
  text: string;
}
