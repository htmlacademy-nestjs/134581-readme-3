import {
  BasePost,
  PostOriginType,
  PostStatusType,
  PostType,
} from '@project/shared/shared-types';

export abstract class BasePostEntity implements BasePost {
  public _id: string;
  public postType: PostType;
  public authorId: string;
  public origin: PostOriginType;
  public status: PostStatusType;
  public createdAt: Date;
  public updatedAt: Date;
  public tags: string[];
  public originalAuthorId?: string;
  public originalPostId?: string;
  constructor(basePost: BasePost) {
    this._id = basePost._id;
    this.authorId = basePost.authorId;
    this.origin = basePost.origin;
    this.status = basePost.status;
    this.originalAuthorId = basePost.originalAuthorId;
    this.originalPostId = basePost.originalPostId;
    this.createdAt = basePost.createdAt;
    this.updatedAt = basePost.updatedAt;
    this.tags = basePost.tags;
  }

  public toObject() {
    return { ...this };
  }

  abstract copy(newAuthorId: string): BasePostEntity;
}
