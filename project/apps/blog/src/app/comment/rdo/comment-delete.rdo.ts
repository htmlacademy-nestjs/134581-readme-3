import { Expose } from 'class-transformer';

export class CommentDeleteRdo {
  @Expose()
  message: string;
  @Expose()
  id: string;
}
