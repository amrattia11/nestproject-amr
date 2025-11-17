import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly roles: string[] = []) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const user = (req as any).user;
    if (!this.roles.length) return true;
    if (!user || !Array.isArray(user.roles)) throw new ForbiddenException('Forbidden');
    const ok = this.roles.some(r => user.roles.includes(r));
    if (!ok) throw new ForbiddenException('Insufficient role');
    return true;
  }
}

