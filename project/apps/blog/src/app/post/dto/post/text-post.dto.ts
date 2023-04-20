import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class TextPostDto extends BasePostDto {
  @ApiProperty({
    description: 'Post type',
    example: PostType.TEXT,
    enum: PostType,
  })
  postType: PostType.TEXT;

  @ApiProperty({
    description: 'The post title',
    example: 'Post Title',
  })
  title: string;

  @ApiProperty({
    description: 'The post excerpt',
    example: 'Post excerpt',
  })
  excerpt: string;

  @ApiProperty({
    description: 'The post content',
    example: 'Post content',
  })
  text: string;
}
