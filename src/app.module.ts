import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DownloadController } from './controllers/download.controller';
import { DownloadService } from './services/download.service';
@Module({
  imports: [],
  controllers: [AppController, DownloadController],
  providers: [AppService, DownloadService],
})
export class AppModule {}
