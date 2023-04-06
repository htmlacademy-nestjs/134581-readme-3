import { Injectable } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostMemoryRepository) {}
}
