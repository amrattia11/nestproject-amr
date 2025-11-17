import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PreAuthValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
   
    if (req.path.startsWith('/auth') && (!req.is('application/json'))) {
      throw new BadRequestException('Requests to /auth must be application/json');
    }
    next();
  }
}
