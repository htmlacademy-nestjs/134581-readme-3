import {
  BasePost,
  PostOriginType,
  PostStatusType,
  PostType,
  Tag,
  Comment,
  Like,
} from '@project/shared/shared-types';

export abstract class BasePostEntity implements BasePost {
  public _id: string;
  public postType: PostType;
  public authorId: string;
  public origin: PostOriginType;
  public status: PostStatusType;
  public createdAt: Date;
  public updatedAt: Date;
  public originalAuthorId?: string;
  public originalPostId?: string;
  public tags: Tag[];
  public comments: Comment[];
  public likes: Like[];

  constructor(basePost: BasePost) {
    this._id = basePost._id;
    this.authorId = basePost.authorId;
    this.origin = basePost.origin;
    this.status = basePost.status;
    this.originalAuthorId = basePost.originalAuthorId;
    this.originalPostId = basePost.originalPostId;
    this.createdAt = basePost.createdAt;
    this.updatedAt = basePost.updatedAt;
    this.tags = [...basePost.tags];
    this.comments = [];
    this.likes = [];
  }

  public toObject() {
    return {
      ...this,
    };
  }

  abstract copy(newAuthorId: string): BasePostEntity;
}
