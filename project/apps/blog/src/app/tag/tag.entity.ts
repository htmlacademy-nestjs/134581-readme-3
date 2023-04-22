import { Entity } from '@project/util/util-types';
import { Tag } from '@project/shared/shared-types';

export class TagEntity implements Entity<TagEntity>, Tag {
  public tagId: string;
  public name: string;

  constructor(tag: Tag) {
    this.name = tag.name;
    this.tagId = tag.tagId;
  }
  public toObject(): TagEntity {
    return { ...this };
  }
}
