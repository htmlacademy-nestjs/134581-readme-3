import { PostType } from '@project/shared/shared-types';
import { VideoPostRdo } from './video-post.rdo';
import { TextPostRdo } from './text-post.rdo';
import { QuotePostRdo } from './quote-post.rdo';
import { PhotoPostRdo } from './photo-post.rdo';
import { LinkPostRdo } from './link-post.rdo';

export { VideoPostRdo, TextPostRdo, QuotePostRdo, PhotoPostRdo, LinkPostRdo };

export type PostRdo =
  | VideoPostRdo
  | TextPostRdo
  | QuotePostRdo
  | PhotoPostRdo
  | LinkPostRdo;

export const postTypeToRdoClass = {
  [PostType.VIDEO]: VideoPostRdo,
  [PostType.TEXT]: TextPostRdo,
  [PostType.QUOTE]: QuotePostRdo,
  [PostType.PHOTO]: PhotoPostRdo,
  [PostType.LINK]: LinkPostRdo,
};
