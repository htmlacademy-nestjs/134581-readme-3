import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class QuotePostDto extends BasePostDto {
  @ApiProperty({
    description: 'Post type',
    example: PostType.QUOTE,
    enum: PostType,
  })
  @IsEnum(PostType)
  postType: PostType.QUOTE;

  @ApiProperty({
    description: 'The quote content',
    example: 'Quote content',
  })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({
    description: 'The quote author',
    example: 'Quote author',
  })
  @IsString()
  @IsNotEmpty()
  author: string;
}
