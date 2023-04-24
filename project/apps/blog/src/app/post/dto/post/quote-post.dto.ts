import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class QuotePostDto extends BasePostDto {
  @ApiProperty({
    description: 'Post type',
    example: PostType.QUOTE,
    enum: PostType,
  })
  postType: PostType.QUOTE;

  @ApiProperty({
    description: 'The quote content',
    example: 'Quote content',
  })
  text: string;

  @ApiProperty({
    description: 'The quote author',
    example: 'Quote author',
  })
  author: string;
}
