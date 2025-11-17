import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Otp, OtpSchema } from './schemas/otp.schema';
import './schemas/otp.hooks';
import { OtpsRepository } from './otps.repository';
import { OtpsService } from './otps.service';
import { OtpsController } from './otps.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Otp.name, schema: OtpSchema }])],
  providers: [OtpsRepository, OtpsService],
  controllers: [OtpsController],
  exports: [OtpsService, OtpsRepository],
})
export class OtpsModule {}
