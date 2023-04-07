import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';
import { PostType } from '@project/shared/shared-types';

export class TextPostRdo extends BasePostRdo {
  @Expose()
  title: string;
  @Expose()
  excerpt: string;
  @Expose()
  text: string;
}
