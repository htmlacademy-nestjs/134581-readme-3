import { Comment } from '@project/shared/shared-types';
export class CommentEntity {
  public _id: string;
  public text: string;
  public postId: string;
  public userId: string;
  public createdAt: number;
  public updatedAt: number;

  constructor(data: Comment) {
    this._id = data._id;
    this.text = data.text;
    this.postId = data.postId;
    this.userId = data.userId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  toObject(): Comment {
    return { ...this };
  }
}
