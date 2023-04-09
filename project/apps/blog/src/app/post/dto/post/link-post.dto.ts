import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class LinkPostDto extends BasePostDto {
  @ApiProperty({
    description: 'Post type',
    example: PostType.Link,
    enum: PostType,
  })
  postType: PostType.Link;

  @ApiProperty({
    description: 'The link URL',
    example: 'https://example.com',
  })
  link: string;

  @ApiProperty({
    description: 'The link description',
    example: 'Link description',
  })
  description: string;
}
