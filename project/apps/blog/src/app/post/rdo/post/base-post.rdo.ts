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
  authorId: number;
  @Expose()
  origin: PostOriginType;
  @Expose()
  status: PostStatusType;
  @Expose()
  originalAuthorId?: number;
  @Expose()
  originalPostId?: number;
  @Expose()
  tags: string[];
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
