import { BaseEntity } from '../../common/entities/base.entity';

export class Brand extends BaseEntity {
  name!: string;
  description?: string;
  logoUrl?: string;
}
