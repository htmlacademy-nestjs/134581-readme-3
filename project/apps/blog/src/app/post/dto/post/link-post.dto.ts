import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';

export class LinkPostDto extends BasePostDto {
  postType: PostType.Link;
  link: string;
  description: string;
}
