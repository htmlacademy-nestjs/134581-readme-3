import { IsArray, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { PostQueryDefault } from '../post.constant';

export class PostQuery {
  @Transform(
    ({ value }) => Number(value) || PostQueryDefault.DEFAULT_POST_COUNT_LIMIT
  )
  @IsNumber()
  @IsOptional()
  public limit: number;

  @Transform(({ value }) => value.split(',').map((tagId) => tagId))
  @IsArray({})
  @IsOptional()
  public tags?: string[];

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' =
    PostQueryDefault.DEFAULT_SORT_DIRECTION;

  @Transform(({ value }) => Number(value))
  @IsOptional()
  public page: number;
}
