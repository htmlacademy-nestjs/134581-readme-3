import { PostType, QuotePost, VideoPost } from '@project/shared/shared-types';
import { BasePostEntity } from './base-post.entity';

export class VideoPostEntity extends BasePostEntity implements VideoPost {
  public postType: PostType.Video;
  public title: string;
  public videoLink: string;

  constructor(videoPost: VideoPost) {
    super(videoPost);
    this.postType = videoPost.postType;
    this.title = videoPost.title;
    this.videoLink = videoPost.videoLink;
  }

  copy(newAuthorId: number, newPostId: number): VideoPostEntity {
    const quotePostCopy: VideoPost = {
      ...this,
      authorId: newAuthorId,
      originalAuthorId: this.authorId,
      originalPostId: this.originalPostId || this._id,
    };

    return new VideoPostEntity(quotePostCopy);
  }
}
