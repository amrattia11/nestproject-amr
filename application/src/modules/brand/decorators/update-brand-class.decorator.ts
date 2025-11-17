import { applyDecorators } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UpdateBrandDto } from '../dto/update-brand.dto';

export function UpdateBrandClassDecorator() {
  return applyDecorators(ApiBody({ type: UpdateBrandDto }));
}
