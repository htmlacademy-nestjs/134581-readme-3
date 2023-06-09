import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsUrl } from 'class-validator';

export class PhotoPostDto extends BasePostDto {
  @ApiProperty({
    description: 'Post type',
    example: PostType.PHOTO,
    enum: PostType,
  })
  @IsEnum(PostType)
  postType: PostType.PHOTO;

  @ApiProperty({
    description: 'The photo URL',
    example: 'https://example.com/photo.jpg',
  })
  @IsUrl()
  @IsNotEmpty()
  photo: string;
}
