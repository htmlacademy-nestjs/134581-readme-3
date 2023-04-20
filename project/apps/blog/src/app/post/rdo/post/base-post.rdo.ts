import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  PostOriginType,
  PostStatusType,
  PostType,
} from '@project/shared/shared-types';

export abstract class BasePostRdo {
  @ApiProperty({
    description: 'The unique post ID',
    example: 'a1b2c3d4',
  })
  @Expose({ name: '_id' })
  id: string;

  @ApiProperty({
    description: 'The type of the post',
    example: PostType.TEXT,
    enum: PostType,
  })
  @Expose()
  postType: PostType;

  @ApiProperty({
    description: 'The user id',
    example: 'a1b2c3d4',
  })
  @Expose()
  authorId: string;

  @ApiProperty({
    description: 'The post origin type',
    example: PostOriginType.Created,
    enum: PostOriginType,
  })
  @Expose()
  origin: PostOriginType;

  @ApiProperty({
    description: 'The post status',
    example: PostStatusType.Published,
    enum: PostStatusType,
  })
  @Expose()
  status: PostStatusType;

  @ApiProperty({
    description: 'original author id, if the post is a repost',
    example: 'a1b2c3d4',
  })
  @Expose()
  originalAuthorId?: string;
  @ApiProperty({
    description: 'original post id, if the post is a repost',
    example: 'a1b2c3d4',
  })
  @Expose()
  originalPostId?: string;

  @ApiProperty({
    description: 'Array of tags associated with the post',
    type: [String],
    example: ['tag1', 'tag2', 'tag3'],
  })
  @Expose()
  tags: string[];

  @ApiProperty({
    description: 'Date and time when the post was created',
    type: 'string',
    example: '2023-01-01T00:00:00.000Z',
  })
  @Expose()
  createdAt: number;

  @ApiProperty({
    description: 'Date and time when the post was updated',
    type: 'string',
    example: '2023-01-01T00:00:00.000Z',
  })
  @Expose()
  updatedAt: number;
}
