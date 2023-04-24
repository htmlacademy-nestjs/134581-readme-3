import { PostOriginType, PostStatusType } from '@project/shared/shared-types';
import { ApiProperty } from '@nestjs/swagger';

export abstract class BasePostDto {
  @ApiProperty({
    description: 'Author ID',
    example: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
  })
  authorId: string;

  @ApiProperty({
    description: 'Post origin',
    example: 'created',
    enum: PostOriginType,
  })
  origin: PostOriginType;

  @ApiProperty({
    description: 'Post status',
    example: 'draft',
    enum: PostStatusType,
  })
  status: PostStatusType;

  @ApiProperty({
    description: 'Post tags',
    type: [String],
    example: ['tagId1', 'tagId2'],
  })
  tags: string[];
}
