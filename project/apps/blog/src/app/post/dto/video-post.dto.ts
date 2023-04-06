import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';

export class VideoPostDto extends BasePostDto {
  postType: PostType.Video;
  title: string;
  videoLink: string;
}
