import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class LinkPostRdo extends BasePostRdo {
  @ApiProperty({
    description: 'The link URL',
    example: 'https://example.com',
  })
  @Expose()
  link: string;

  @ApiProperty({
    description: 'The link description',
    example: 'Link description',
  })
  @Expose()
  description: string;
}
