import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../interfaces/success-response.interface';

@Injectable()
export class SuccessResponseInterceptor<T> implements NestInterceptor<T, SuccessResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<SuccessResponse<T>> {
    return next.handle().pipe(
      map((data: any) => {
        const message = data?.message ?? 'OK';
        const body = data?.data ?? data;
        return { success: true, message, data: body };
      }),
    );
  }
}
