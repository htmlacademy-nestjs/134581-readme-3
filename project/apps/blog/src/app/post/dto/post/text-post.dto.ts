import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class TextPostDto extends BasePostDto {
  @ApiProperty({
    description: 'Post type',
    example: PostType.TEXT,
    enum: PostType,
  })
  @IsEnum(PostType)
  postType: PostType.TEXT;

  @ApiProperty({
    description: 'The post title',
    example: 'Post Title',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The post excerpt',
    example: 'Post excerpt',
  })
  @IsString()
  @IsNotEmpty()
  excerpt: string;

  @ApiProperty({
    description: 'The post content',
    example: 'Post content',
  })
  @IsString()
  @IsNotEmpty()
  text: string;
}
