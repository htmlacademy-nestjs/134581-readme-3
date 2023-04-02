export const enum PostType {
  Video = 'video',
  Text = 'text',
  Quote = 'quote',
  Photo = 'photo',
  Link = 'link',
}

export const enum PostOriginType {
  Reposted = 'reposted',
  Created = 'created',
}

export const enum PostStatusType {
  Published = 'published',
  Draft = 'draft',
}

export interface BasePost {
  _id: string;
  authorId: number;
  origin: PostOriginType;
  status: PostStatusType;
  originalAuthorId?: number;
  originalPostId?: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoPost extends BasePost {
  postType: PostType.Video;
  title: string;
  videoLink: string;
}

export interface TextPost extends BasePost {
  postType: PostType.Text;
  title: string;
  excerpt: string;
  text: string;
}

export interface QuotePost extends BasePost {
  postType: PostType.Quote;
  text: string;
  author: string;
}

export interface PhotoPost extends BasePost {
  postType: PostType.Photo;
  photo: string;
}

export interface LinkPost extends BasePost {
  postType: PostType.Link;
  link: string;
  description: string;
}

export type Post = VideoPost | TextPost | QuotePost | PhotoPost | LinkPost;
