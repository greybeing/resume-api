import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DownloadController } from './controllers/download.controller';
import { DownloadService } from './services/download.service';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({  envFilePath: 'src/.env'   })
  ],
  controllers: [AppController, DownloadController],
  providers: [AppService, DownloadService],
})
export class AppModule {
  static port: string
  constructor(configService: ConfigService) {
    AppModule.port = configService.get('PORT')
  }
}
