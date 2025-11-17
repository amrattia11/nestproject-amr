import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../database/repositories/base.repository';
import { Otp } from './schemas/otp.schema';

@Injectable()
export class OtpsRepository extends BaseRepository<Otp> {
  constructor(@InjectModel(Otp.name) private readonly otpModel: Model<Otp>) {
    super(otpModel);
  }
}
