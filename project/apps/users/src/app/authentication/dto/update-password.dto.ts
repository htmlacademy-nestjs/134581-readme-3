import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty({
    description: 'User uniq email',
    example: 'user@user.ru',
  })
  public email: string; // replace with authToken in the future

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;

  @ApiProperty({
    description: 'New password',
    example: '123456',
  })
  public newPassword: string;
}
