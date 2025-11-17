import { Injectable, Logger } from '@nestjs/common';
import { SendEmailOptions } from './interfaces/send-email-options.interface';


@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  async send(options: SendEmailOptions): Promise<void> {
   
    this.logger.log(`Sending mail => to: ${options.to}, subject: ${options.subject}`);
  
  }
}
