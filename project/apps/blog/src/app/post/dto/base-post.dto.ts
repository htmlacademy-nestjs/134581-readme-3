import { PostOriginType, PostStatusType } from '@project/shared/shared-types';

export abstract class BasePostDto {
  authorId: number;
  origin: PostOriginType;
  status: PostStatusType;
  tags: string[];
}
