import { PostOriginType, VideoPost } from '@project/shared/shared-types';
import { BasePostEntity } from './base-post.entity';

export class VideoPostEntity extends BasePostEntity implements VideoPost {
  public title: string;
  public videoLink: string;

  constructor(videoPost: VideoPost) {
    super(videoPost);
    this.postType = videoPost.postType;
    this.title = videoPost.title;
    this.videoLink = videoPost.videoLink;
  }

  copy(newAuthorId: string): VideoPostEntity {
    const quotePostCopy: VideoPost = {
      ...this,
      authorId: newAuthorId,
      originalAuthorId: this.authorId,
      originalPostId: this._id,
      origin: PostOriginType.Reposted,
    };

    return new VideoPostEntity(quotePostCopy);
  }
}
