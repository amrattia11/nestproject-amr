import { Injectable, BadRequestException } from '@nestjs/common';
import { OtpsRepository } from './otps.repository';
import { MailService } from '../mail/mail.service';
import { CreateOtpDto } from './dto/create-otp.dto';
import { randomInt } from 'crypto';
import { EncryptionUtils } from '../utils/encryption.util';

@Injectable()
export class OtpsService {
  constructor(
    private readonly repo: OtpsRepository,
    private readonly mail: MailService,
  ) {}

  async createAndSend(dto: CreateOtpDto): Promise<void> {
    const raw = ('' + (100000 + randomInt(900000))); 
    await this.repo.create({
      email: dto.email,
      code: raw, 
      expiresAt: new Date(Date.now() + 1000 * 60 * 10),
      used: false,
    } as any);

    await this.mail.send({
      to: dto.email,
      subject: 'Your confirmation code',
      text: `Your code is: ${raw}`,
    });
  }

  async resend(email: string): Promise<void> {
    return this.createAndSend({ email });
  }

  async confirm(email: string, code: string): Promise<boolean> {
    const record = await this.repo.findOne({ email }, '+code +expiresAt +used' as any);
    if (!record) throw new BadRequestException('OTP not found');
    if (record.used) throw new BadRequestException('OTP already used');
    if (new Date(record.expiresAt).getTime() < Date.now()) {
      throw new BadRequestException('OTP expired');
    }
    const ok = await EncryptionUtils.compare(code, (record as any).code);
    if (!ok) throw new BadRequestException('Invalid code');
    await this.repo.updateOne({ email }, { $set: { used: true } } as any);
    return true;
  }
}
