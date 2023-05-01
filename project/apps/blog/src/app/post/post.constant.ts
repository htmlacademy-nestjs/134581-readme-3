export enum PostMessage {
  INVALID_POST_TYPE = 'INVALID_POST_TYPE',
  POST_NOT_FOUND = 'Post not found',
  POST_DELETE_SUCCESS = 'Post deleted successfully',
  REPOST_FORBIDDEN = 'You can only repost original posts',
}

export enum PostQueryDefault {
  DEFAULT_POST_COUNT_LIMIT = 10,
  DEFAULT_SORT_DIRECTION = 'desc',
}
