import { Injectable } from '@nestjs/common';
import { ConfigService } from 'nestjs-dotenv';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Oluwagbenga.com-API';
  }
  constructor(
    private readonly configService: ConfigService
) {}
}


