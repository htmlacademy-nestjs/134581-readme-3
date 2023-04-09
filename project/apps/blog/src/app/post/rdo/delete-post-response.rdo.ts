import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DeletePostResponseRdo {
  @ApiProperty({
    description: 'The confimration message',
    example: 'Deletion was successful',
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: 'The unique ID of the deleted post',
    example: 'a1b2c3d4',
  })
  @Expose()
  id: string;
}
