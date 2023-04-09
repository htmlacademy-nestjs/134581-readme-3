import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  _id: string;
  @Expose()
  text: string;
  @Expose()
  postId: string;
  @Expose()
  userId: string;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
