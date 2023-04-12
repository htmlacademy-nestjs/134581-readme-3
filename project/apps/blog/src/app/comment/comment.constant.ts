export const enum CommentMessage {
  COMMENT_DELETE_SUCCESS = 'Comment deleted successfully',
}

export const COMMENT_NOT_FOUND_ERROR = (id: string) =>
  `Comment with ID "${id}" not found.`;
