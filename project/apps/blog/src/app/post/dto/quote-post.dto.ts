import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';

export class QuotePostDto extends BasePostDto {
  postType: PostType.Quote;
  text: string;
  author: string;
}
