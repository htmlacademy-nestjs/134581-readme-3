import { Expose } from 'class-transformer';
import {
  PostOriginType,
  PostStatusType,
  PostType,
} from '@project/shared/shared-types';

export abstract class BasePostRdo {
  @Expose({ name: '_id' })
  id: string;
  @Expose()
  postType: PostType;
  @Expose()
  authorId: string;
  @Expose()
  origin: PostOriginType;
  @Expose()
  status: PostStatusType;
  @Expose()
  originalAuthorId?: string;
  @Expose()
  originalPostId?: string;
  @Expose()
  tags: string[];
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
