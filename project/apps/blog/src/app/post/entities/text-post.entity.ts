import { PostOriginType, TextPost } from '@project/shared/shared-types';
import { BasePostEntity } from './base-post.entity';

export class TextPostEntity extends BasePostEntity {
  public title: string;
  public excerpt: string;
  public text: string;
  constructor(textPost: TextPost) {
    super(textPost);
    this.postType = textPost.postType;
    this.title = textPost.title;
    this.excerpt = textPost.excerpt;
    this.text = textPost.text;
  }

  copy(newAuthorId: string): TextPostEntity {
    const textPostCopy: TextPost = {
      ...this,
      originalAuthorId: this.authorId,
      originalPostId: this._id,
      authorId: newAuthorId,
      origin: PostOriginType.Reposted,
    };

    return new TextPostEntity(textPostCopy);
  }
}
