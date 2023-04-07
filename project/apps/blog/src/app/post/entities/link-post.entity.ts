import { LinkPost, PostType } from '@project/shared/shared-types';
import { BasePostEntity } from './base-post.entity';

export class LinkPostEntity extends BasePostEntity implements LinkPost {
  public link: string;
  public description: string;

  constructor(linkPost: LinkPost) {
    super(linkPost);
    this.postType = linkPost.postType;
    this.link = linkPost.link;
    this.description = linkPost.description;
  }

  copy(newAuthorId: number, newPostId: number): LinkPostEntity {
    const linkPostCopy: LinkPost = {
      ...this,
      authorId: newAuthorId,
      originalAuthorId: this.authorId,
      originalPostId: this.originalPostId || this._id,
    };

    return new LinkPostEntity(linkPostCopy);
  }
}
