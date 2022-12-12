import {
    Controller,
    Get,
    Res,
    StreamableFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
  import { DownloadService } from '../services/download.service';
  import { Response } from 'express';
  import { LoggingInterceptor } from '../logging.interceptor';
  import { ApiFileResponse} from '../api-file-resonse.decorator';
  import { HttpStatus } from '@nestjs/common';

 
  @UseInterceptors(LoggingInterceptor)
  @Controller('download')
  @ApiTags('download')
  export class DownloadController {
    constructor(private readonly downloadService: DownloadService) {}
  

    @ApiFileResponse('application/pdf')
    @Get('streamable')
    streamable(@Res({ passthrough: true }) response: Response) {
      const file = this.downloadService.fileStream();
      // or
      // const file = this.downloadService.fileBuffer();
      response.contentType('application/pdf');
      response.attachment('Oluwagbenga.pdf');
      return new StreamableFile(file); // 👈 supports Buffer and Stream
    }
  }
  