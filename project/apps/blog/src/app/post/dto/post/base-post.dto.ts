import { PostOriginType, PostStatusType } from '@project/shared/shared-types';

export abstract class BasePostDto {
  authorId: string;
  origin: PostOriginType;
  status: PostStatusType;
  tags: string[];
}
