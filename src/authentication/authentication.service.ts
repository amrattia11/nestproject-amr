import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountsService } from '../accounts/accounts.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly accounts: AccountsService, private readonly jwt: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = await this.accounts.validateUser(email, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto.email, dto.password);
    const payload = { sub: (user as any)._id ?? (user as any).id, email: user.email };
    return { access_token: await this.jwt.signAsync(payload) };
  }
}

