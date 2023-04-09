export enum PostType {
  Video = 'video',
  Text = 'text',
  Quote = 'quote',
  Photo = 'photo',
  Link = 'link',
}

export enum PostOriginType {
  Reposted = 'reposted',
  Created = 'created',
}

export enum PostStatusType {
  Published = 'published',
  Draft = 'draft',
}

export interface BasePost {
  _id?: string;
  postType: PostType;
  authorId: string;
  origin: PostOriginType;
  status: PostStatusType;
  originalAuthorId?: string;
  originalPostId?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoPost extends BasePost {
  title: string;
  videoLink: string;
}

export interface TextPost extends BasePost {
  title: string;
  excerpt: string;
  text: string;
}

export interface QuotePost extends BasePost {
  text: string;
  author: string;
}

export interface PhotoPost extends BasePost {
  photo: string;
}

export interface LinkPost extends BasePost {
  link: string;
  description: string;
}

export type Post = VideoPost | TextPost | QuotePost | PhotoPost | LinkPost;
