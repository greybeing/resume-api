import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Visitor, VisitorSchema } from '../schema/visitor.schema';
import { VisitorsController } from '../controllers/visitors.controller';
import { VisitorsService } from '../services/visitors.service';

@Module({
  imports: [  MongooseModule.forFeature([{ name: Visitor.name, schema: VisitorSchema }]),],
  controllers: [VisitorsController],
  providers: [VisitorsService],
})
export class VisitorsModule {}
