import { PhotoPost, PostOriginType } from '@project/shared/shared-types';
import { BasePostEntity } from './base-post.entity';

export class PhotoPostEntity extends BasePostEntity implements PhotoPost {
  public photo: string;
  constructor(photoPost: PhotoPost) {
    super(photoPost);
    this.postType = photoPost.postType;
    this.photo = photoPost.photo;
  }

  copy(newAuthorId: string): PhotoPostEntity {
    const photoPostCopy: PhotoPost = {
      ...this,
      authorId: newAuthorId,
      originalAuthorId: this.authorId,
      originalPostId: this._id,
      origin: PostOriginType.Reposted,
    };

    return new PhotoPostEntity(photoPostCopy);
  }
}
