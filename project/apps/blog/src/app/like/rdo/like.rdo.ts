import { Expose } from 'class-transformer';

export class LikeRdo {
  @Expose()
  _id: string;
  @Expose()
  userId: string;
  @Expose()
  postId: string;
}
