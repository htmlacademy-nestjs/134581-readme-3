import { BasePostEntity } from './base-post.entity';
import { PostType, QuotePost } from '@project/shared/shared-types';

export class QuotePostEntity extends BasePostEntity implements QuotePost {
  public postType: PostType.Quote;
  public author: string;
  public text: string;
  constructor(quotePost: QuotePost) {
    super(quotePost);
    this.postType = quotePost.postType;
    this.author = quotePost.author;
    this.text = quotePost.text;
  }

  copy(newAuthorId: number, newPostId: number): QuotePostEntity {
    const quotePostCopy: QuotePost = {
      ...this,
      authorId: newAuthorId,
      originalAuthorId: this.authorId,
      originalPostId: this.originalPostId || this._id,
    };

    return new QuotePostEntity(quotePostCopy);
  }
}
