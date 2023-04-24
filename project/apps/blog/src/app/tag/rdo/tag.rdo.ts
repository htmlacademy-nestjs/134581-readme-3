import { Expose, Transform } from 'class-transformer';

export class TagRdo {
  @Expose({ name: 'tagId' })
  @Transform(({ obj }) => obj.tagId.toString())
  public id: string;

  @Expose()
  public name: string;
}
