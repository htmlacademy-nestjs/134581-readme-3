import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { fillObject } from '@project/util/util-core';
import { TagRdo } from './rdo/tag.rdo';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('/:id')
  async show(@Param('id') tagId: string) {
    const existTag = await this.tagService.getTag(tagId);
    return fillObject(TagRdo, existTag);
  }

  @Get('/')
  async index() {
    const tags = await this.tagService.getTags();
    return fillObject(TagRdo, tags);
  }

  @Post('/')
  async create(@Body() dto: CreateTagDto) {
    const newTag = await this.tagService.createTag(dto);
    return fillObject(TagRdo, newTag);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') tagId: string) {
    return this.tagService.deleteTag(tagId);
  }

  @Patch('/:id')
  async update(@Param('id') tagId: string, @Body() dto: UpdateTagDto) {
    const updatedTag = await this.tagService.updateTag(tagId, dto);
    return fillObject(TagRdo, updatedTag);
  }
}
