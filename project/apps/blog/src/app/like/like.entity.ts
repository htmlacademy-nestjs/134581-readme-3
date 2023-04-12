import { Like } from '@project/shared/shared-types';

export class LikeEntity {
  public _id: string;
  public userId: string;
  public postId: string;
  constructor(like: Like) {
    this._id = like._id;
    this.userId = like.userId;
    this.postId = like.postId;
  }

  toObject(): Like {
    return { ...this };
  }
}
