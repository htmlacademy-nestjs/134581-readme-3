import { VideoPostDto } from './video-post.dto';
import { TextPostDto } from './text-post.dto';
import { QuotePostDto } from './quote-post.dto';
import { PhotoPostDto } from './photo-post.dto';
import { LinkPostDto } from './link-post.dto';

export { VideoPostDto, TextPostDto, QuotePostDto, PhotoPostDto, LinkPostDto };

export type PostDto =
  | VideoPostDto
  | TextPostDto
  | QuotePostDto
  | PhotoPostDto
  | LinkPostDto;
