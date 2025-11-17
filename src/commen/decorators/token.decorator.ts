import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  const auth = req.headers['authorization'] ?? '';
  return typeof auth === 'string' && auth.startsWith('Bearer ') ? auth.slice(7) : null;
});
