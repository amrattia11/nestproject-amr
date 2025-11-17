import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '../../authentication/guards/auth.guard';

export function Authenticated() {
  return applyDecorators(UseGuards(AuthGuard));
}
