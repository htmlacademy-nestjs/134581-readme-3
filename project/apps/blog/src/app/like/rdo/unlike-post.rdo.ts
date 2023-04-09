import { Expose } from 'class-transformer';

export class UnlikePostRdo {
  @Expose()
  message: string;
  @Expose()
  userId: string;
  @Expose()
  postId: string;
}
