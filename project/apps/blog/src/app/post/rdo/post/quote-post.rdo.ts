import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class QuotePostRdo extends BasePostRdo {
  @ApiProperty({
    description: 'The quote content',
    example: 'Quote content',
  })
  @Expose()
  text: string;

  @ApiProperty({
    description: 'The quote author',
    example: 'Quote author',
  })
  @Expose()
  author: string;
}
