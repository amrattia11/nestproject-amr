import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { EncryptionUtils } from '../utils/encryption.util';

type LeanUser = {
  _id?: any;
  email: string;
  name: string;
  password?: string;
  emailConfirmToken?: string;
  emailConfirmed?: boolean;
  googleId?: string;
};

@Injectable()
export class AccountsService {
  constructor(private readonly repo: AccountsRepository) {}

  async signupLocal(dto: CreateUserDto) {
    const exists = await this.repo.findOne({ email: dto.email });
    if (exists) throw new BadRequestException('Email already registered');

    const created = (await this.repo.create({
      email: dto.email,
      name: dto.name,
      password: dto.password ? await EncryptionUtils.hash(dto.password) : undefined,
      emailConfirmToken: Math.random().toString(36).slice(2),
    })) as unknown as LeanUser;

    return { id: created?._id?.toString?.(), email: created.email, name: created.name };
  }

  async validateUser(email: string, password: string) {
    const user = (await this.repo.findOne({ email }, '+password')) as unknown as LeanUser | null;
    if (!user || !user.password) return null;
    const ok = await EncryptionUtils.compare(password, user.password);
    if (!ok) return null;
    return user;
  }

  async confirmEmail(token: string) {
    const user = (await this.repo.findOne({ emailConfirmToken: token })) as unknown as LeanUser | null;
    if (!user) throw new NotFoundException('Invalid token');
    await this.repo.updateOne(
      { email: user.email } as any,
      { $unset: { emailConfirmToken: 1 } as any, $set: { emailConfirmed: true } as any } as any,
    );
    return { email: user.email, emailConfirmed: true };
  }

  async createOrFindGoogle(profile: { email: string; name: string; googleId: string }) {
    const existing = (await this.repo.findOne({ email: profile.email })) as unknown as LeanUser | null;
    if (existing) return existing;
    return this.repo.create({
      email: profile.email,
      name: profile.name,
      googleId: profile.googleId,
      emailConfirmed: true,
    } as any);
  }
}

