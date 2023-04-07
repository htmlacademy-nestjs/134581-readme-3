import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';
import { PostType } from '@project/shared/shared-types';

export class PhotoPostRdo extends BasePostRdo {
  @Expose()
  photo: string;
}
