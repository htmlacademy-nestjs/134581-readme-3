import { Module } from '@nestjs/common';
import { FileService } from './file/file.service';
import { FileController } from './file/file.controller';
import { FileModule } from './file/file.module';
import { ConfigUploaderModule } from '@project/config/config-uploader';

@Module({
  imports: [FileModule, ConfigUploaderModule],
  controllers: [FileController],
  providers: [FileService],
})
export class AppModule {}
