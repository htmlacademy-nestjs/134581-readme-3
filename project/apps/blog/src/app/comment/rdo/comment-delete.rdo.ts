import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CommentDeleteRdo {
  @ApiProperty({
    description: 'The confirmation message',
    example: 'Deletion was successful',
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: 'Comment ID',
    example: '3a4b5c6d-7e8f-9g0h-1i2j-3k4l5m6n7o8p',
  })
  @Expose()
  id: string;
}
