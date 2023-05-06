import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment text',
    example: 'This is a sample comment.',
  })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({
    description: 'Post ID',
    example: '2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p',
  })
  @IsUUID()
  @IsNotEmpty()
  postId: string;

  @ApiProperty({
    description: 'User ID',
    example: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
  })
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}
