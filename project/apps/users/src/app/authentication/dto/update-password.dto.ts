import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { AuthMessage } from '../authentication.constant';

export class UpdatePasswordDto {
  @ApiProperty({
    description: 'User uniq email',
    example: 'user@user.ru',
  })
  @IsEmail({}, { message: AuthMessage.AUTH_USER_EMAIL_NOT_VALID })
  public email: string; // replace with authToken in the future

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  @IsString()
  public password: string;

  @ApiProperty({
    description: 'New password',
    example: '123456',
  })
  @IsString()
  public newPassword: string;
}
