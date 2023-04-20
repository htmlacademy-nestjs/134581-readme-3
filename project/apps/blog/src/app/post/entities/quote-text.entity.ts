import { BasePostEntity } from './base-post.entity';
import { PostOriginType, QuotePost } from '@project/shared/shared-types';

export class QuotePostEntity extends BasePostEntity implements QuotePost {
  public author: string;
  public text: string;
  constructor(quotePost: QuotePost) {
    super(quotePost);
    this.postType = quotePost.postType;
    this.author = quotePost.author;
    this.text = quotePost.text;
  }

  copy(newAuthorId: string): QuotePostEntity {
    const quotePostCopy: QuotePost = {
      ...this,
      authorId: newAuthorId,
      originalAuthorId: this.authorId,
      originalPostId: this._id,
      origin: PostOriginType.REPOSTED,
    };

    return new QuotePostEntity(quotePostCopy);
  }
}
