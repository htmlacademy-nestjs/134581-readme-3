import { Expose } from 'class-transformer';
import { PostType } from '@project/shared/shared-types';
import { BasePostRdo } from './base-post.rdo';

export class LinkPostRdo extends BasePostRdo {
  @Expose()
  link: string;
  @Expose()
  description: string;
}
