import { Entity } from '@project/util/util-types';
import { Tag } from '@project/shared/shared-types';

export class TagEntity implements Entity<TagEntity>, Tag {
  public _id: string;
  public name: string;

  constructor(category: Tag) {
    this.name = category.name;
    this._id = category._id;
  }
  public toObject(): TagEntity {
    return { ...this };
  }
}
