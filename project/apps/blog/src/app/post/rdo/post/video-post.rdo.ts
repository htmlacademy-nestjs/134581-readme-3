import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class VideoPostRdo extends BasePostRdo {
  @Expose()
  title: string;
  @Expose()
  videoLink: string;
}
