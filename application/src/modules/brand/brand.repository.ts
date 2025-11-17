import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandRepository {
  private storage = new Map<string, Brand>();

  create(partial: Omit<Brand, 'id' | 'createdAt' | 'updatedAt'>): Brand {
    const now = new Date();
    const brand: Brand = { ...partial, id: uuid(), createdAt: now, updatedAt: now, isDeleted: false, isArchived: false, deletedAt: null as any };
    this.storage.set(brand.id, brand);
    return brand;
  }

  findAll(includeArchived = false): Brand[] {
    return [...this.storage.values()].filter(b => includeArchived ? true : !b.isArchived && !b.isDeleted);
  }

  findArchived(): Brand[] {
    return [...this.storage.values()].filter(b => b.isArchived && !b.isDeleted);
  }

  findOne(id: string): Brand {
    const b = this.storage.get(id);
    if (!b) throw new NotFoundException('Brand not found');
    return b;
  }

  update(id: string, patch: Partial<Brand>): Brand {
    const b = this.findOne(id);
    const updated = { ...b, ...patch, updatedAt: new Date() };
    this.storage.set(id, updated);
    return updated;
  }

  softDelete(id: string): Brand {
    const b = this.findOne(id);
    const updated = { ...b, isDeleted: true, deletedAt: new Date(), updatedAt: new Date() };
    this.storage.set(id, updated);
    return updated;
  }

  archive(id: string): Brand {
    const b = this.findOne(id);
    const updated = { ...b, isArchived: true, updatedAt: new Date() };
    this.storage.set(id, updated);
    return updated;
  }

  hardDelete(id: string): void {
    if (!this.storage.delete(id)) throw new NotFoundException('Brand not found');
  }
}
