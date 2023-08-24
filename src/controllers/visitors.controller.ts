// visitors.controller.ts
import { Controller, Get } from '@nestjs/common';
import { VisitorsService } from '../services/visitors.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('visitors')
@ApiTags('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {}

  @Get()
  async getVisitorCount(): Promise<{ count: number }> {
    const count = await this.visitorsService.getVisitorCount();
    return { count };
  }
}
