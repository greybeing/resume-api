import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Visitor, VisitorDocument } from '../schema/visitor.schema';

@Injectable()
export class VisitorsService {
  constructor(
    @InjectModel(Visitor.name)
    private readonly visitorModel: Model<VisitorDocument>,
  ) {}

  async getVisitorCount(): Promise<number> {
    const visitor = await this.visitorModel.findOne({ name: 'visitor' });

    if (!visitor) {
      const newVisitor = new this.visitorModel({
        name: 'visitor',
        count: 1,
      });
      await newVisitor.save();
      console.log('First visitor arrived');
      return 1;
    }

    visitor.count += 1;
    await visitor.save();
    console.log(`Visitor arrived: ${visitor.count}`);
    return visitor.count;
  }
}
