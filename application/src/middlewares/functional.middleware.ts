import { Request, Response, NextFunction } from 'express';

export function FunctionalMiddleware(req: Request, res: Response, next: NextFunction) {

  if (!req.headers['x-request-id']) {
    req.headers['x-request-id'] = Math.random().toString(36).slice(2);
  }
  next();
}
