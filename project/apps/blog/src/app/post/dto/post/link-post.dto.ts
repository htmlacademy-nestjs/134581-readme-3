import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class LinkPostDto extends BasePostDto {
  @ApiProperty({
    description: 'Post type',
    example: PostType.LINK,
    enum: PostType,
  })
  @IsEnum(PostType)
  postType: PostType.LINK;

  @ApiProperty({
    description: 'The link URL',
    example: 'https://example.com',
  })
  @IsUrl()
  @IsNotEmpty()
  link: string;

  @ApiProperty({
    description: 'The link description',
    example: 'Link description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
