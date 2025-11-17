import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { ZodType } from 'zod';
export declare class CustomValidationPipe implements PipeTransform {
    private schema;
    constructor(schema: ZodType);
    transform(value: any, metadata: ArgumentMetadata): any;
}
