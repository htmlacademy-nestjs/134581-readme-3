import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';

export class TextPostDto extends BasePostDto {
  postType: PostType.Text;
  title: string;
  excerpt: string;
  text: string;
}
