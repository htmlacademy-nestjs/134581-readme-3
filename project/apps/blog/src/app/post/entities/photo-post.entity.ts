import { PhotoPost, PostType } from '@project/shared/shared-types';
import { BasePostEntity } from './base-post.entity';

export class PhotoPostEntity extends BasePostEntity implements PhotoPost {
  public postType: PostType.Photo;
  public photo: string;
  constructor(photoPost: PhotoPost) {
    super(photoPost);
    this.postType = photoPost.postType;
    this.photo = photoPost.photo;
  }

  copy(newAuthorId: number, newPostId: number): PhotoPostEntity {
    const photoPostCopy: PhotoPost = {
      ...this,
      authorId: newAuthorId,
      originalAuthorId: this.authorId,
      originalPostId: this.originalPostId || this._id,
    };

    return new PhotoPostEntity(photoPostCopy);
  }
}
