import { Injectable } from '@nestjs/common';
import { Tag } from '@project/shared/shared-types';
import { TagRepository } from './tag.repository';
import { TagEntity } from './tag.entity';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}

  async createTag(dto: CreateTagDto): Promise<Tag> {
    const tagEntity = new TagEntity(dto);
    return this.tagRepository.create(tagEntity);
  }

  async deleteTag(id: string): Promise<void> {
    this.tagRepository.destroy(id);
  }

  async getTag(id: string): Promise<Tag> {
    return this.tagRepository.findById(id);
  }

  async getTags(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async getTagsByIds(ids: string[]): Promise<Tag[]> {
    return this.tagRepository.find(ids);
  }

  async updateTag(id: string, dto: UpdateTagDto): Promise<Tag> {
    return this.tagRepository.update(id, new TagEntity(dto));
  }
}
