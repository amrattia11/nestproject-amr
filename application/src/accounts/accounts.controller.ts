import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class AccountsController {
  constructor(private readonly accounts: AccountsService) {}

  @Post('signup')
  signup(@Body() dto: CreateUserDto) {
    return this.accounts.signupLocal(dto);
  }

  @Get('confirm')
  confirm(@Query('token') token: string) {
    return this.accounts.confirmEmail(token);
  }
}

