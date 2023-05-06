import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {
  LinkPostDto,
  PhotoPostDto,
  PostDto,
  QuotePostDto,
  TextPostDto,
  VideoPostDto,
} from './dto/post';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { PostType } from '@project/shared/shared-types';

@Injectable()
export class PostValidationPipe implements PipeTransform {
  async transform(value: any): Promise<PostDto> {
    const postTypeToDtoClassMap = {
      [PostType.VIDEO]: VideoPostDto,
      [PostType.TEXT]: TextPostDto,
      [PostType.QUOTE]: QuotePostDto,
      [PostType.PHOTO]: PhotoPostDto,
      [PostType.LINK]: LinkPostDto,
    };

    const PostTypeClass = postTypeToDtoClassMap[value.postType];

    if (!PostTypeClass) {
      throw new BadRequestException(`Invalid postType: ${value.postType}`);
    }

    const dto = plainToInstance<PostDto, object>(
      PostTypeClass,
      value as object
    );

    const errors = await validate(dto);

    if (errors.length > 0) {
      const errorMessages = errors.map((error) => {
        const constraints = Object.values(error.constraints || {});
        return `${error.property}: ${constraints.join(', ')}`;
      });

      throw new BadRequestException(errorMessages.join('; '));
    }

    return dto;
  }
}
