import { Body, Controller, Post } from '@nestjs/common';
import { OtpsService } from './otps.service';
import { CreateOtpDto } from './dto/create-otp.dto';

@Controller('otp')
export class OtpsController {
  constructor(private readonly service: OtpsService) {}

  @Post('create')
  async create(@Body() dto: CreateOtpDto) {
    await this.service.createAndSend(dto);
    return { ok: true };
  }

  @Post('resend')
  async resend(@Body() dto: CreateOtpDto) {
    await this.service.resend(dto.email);
    return { ok: true };
  }

  @Post('confirm')
  async confirm(@Body() body: { email: string; code: string }) {
    const ok = await this.service.confirm(body.email, body.code);
    return { ok };
  }
}
