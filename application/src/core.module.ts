import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { DbModule } from './database/db.module';
import { AccountsModule } from './accounts/accounts.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { BrandModule } from './modules/brand/brand.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [BrandModule, UploadModule, DbModule, AccountsModule, AuthenticationModule],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}

