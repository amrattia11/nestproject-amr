import { Injectable } from '@nestjs/common';
import { BrandRepository } from './brand.repository';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService {
  constructor(private readonly repo: BrandRepository) {}

  create(dto: CreateBrandDto) {
    return this.repo.create({ name: dto.name, description: dto.description });
  }

  findAll() {
    return this.repo.findAll(false);
  }

  findAllArchived() {
    return this.repo.findArchived();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, dto: UpdateBrandDto) {
    return this.repo.update(id, { ...dto });
  }

  updateAttachment(id: string, logoUrl: string) {
    return this.repo.update(id, { logoUrl });
  }

  softDelete(id: string) {
    return this.repo.softDelete(id);
  }

  archive(id: string) {
    return this.repo.archive(id);
  }

  hardDelete(id: string) {
    return this.repo.hardDelete(id);
  }
}
