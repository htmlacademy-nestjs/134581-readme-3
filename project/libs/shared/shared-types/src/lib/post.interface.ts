export const enum PostType {
  Video = 'video',
  Text = 'text',
  Quote = 'quote',
  Photo = 'photo',
  Link = 'link',
}

interface BasePost {
  authorId: number;
  origin: 'reposted' | 'created';
  status: 'published' | 'draft';
  originalAuthorId?: number;
  originalPostId?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoPost extends BasePost {
  postType: PostType.Video;
  title: string;
  videoLink: string;
  tags: string[];
}

export interface TextPost extends BasePost {
  postType: PostType.Text;
  title: string;
  excerpt: string;
  text: string;
  tags: string[];
}

export interface QuotePost extends BasePost {
  postType: PostType.Quote;
  text: string;
  author: string;
  tags: string[];
}

export interface PhotoPost extends BasePost {
  postType: PostType.Photo;
  photo: string;
  tags: string[];
}

export interface LinkPost extends BasePost {
  postType: PostType.Link;
  link: string;
  description: string;
  tags: string[];
}

export type Post = VideoPost | TextPost | QuotePost | PhotoPost | LinkPost;
