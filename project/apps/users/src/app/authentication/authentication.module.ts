import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { BlogUserModule } from '../blog-user/blog-user.module';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';

@Module({
  imports: [BlogUserModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {
  constructor(private readonly blogUserRepository: BlogUserMemoryRepository) {}
}
