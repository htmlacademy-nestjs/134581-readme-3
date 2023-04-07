import { PostType } from '@project/shared/shared-types';
import { BasePostDto } from './base-post.dto';

export class PhotoPostDto extends BasePostDto {
  postType: PostType.Photo;
  photo: string;
}
