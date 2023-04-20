export enum PostType {
  VIDEO = 'VIDEO',
  TEXT = 'TEXT',
  QUOTE = 'QUOTE',
  PHOTO = 'PHOTO',
  LINK = 'LINK',
}

export enum PostOriginType {
  REPOSTED = 'REPOSTED',
  CREATED = 'CREATED',
}

export enum PostStatusType {
  PUBLISHED = 'PUBLISHED',
  DRAFT = 'DRAFT',
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
  createdAt: number;
  updatedAt: number;
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
