import { IsNotEmpty, IsString } from 'class-validator';

export class RepostPostDto {
  @IsString()
  @IsNotEmpty()
  newAuthorId: string;
}
