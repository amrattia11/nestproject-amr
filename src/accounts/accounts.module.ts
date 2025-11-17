import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import './schemas/user.hooks';
import { AccountsRepository } from './accounts.repository';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [AccountsRepository, AccountsService],
  controllers: [AccountsController],
  exports: [AccountsRepository, AccountsService],
})
export class AccountsModule {}

