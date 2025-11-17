import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenService {
  sign(payload: object, secret = process.env.JWT_SECRET ?? 'dev-secret', expiresIn = '7d'): string {
    return jwt.sign(payload, secret, { expiresIn });
  }

  verify<T = any>(token: string, secret = process.env.JWT_SECRET ?? 'dev-secret'): T {
    return jwt.verify(token, secret) as T;
  }
}
