import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class PhotoPostRdo extends BasePostRdo {
  @ApiProperty({
    description: 'The photo URL',
    example: 'https://example.com/photo.jpg',
  })
  @Expose()
  photo: string;
}
