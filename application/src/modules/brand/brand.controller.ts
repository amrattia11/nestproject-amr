import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { localImageMulterOptions } from '../../upload/multer.routes.options';
import { ImageParseFilePipe } from '../../upload/multer.parse-file.pipe';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly service: BrandService) {}

  @Post()
  create(@Body() dto: CreateBrandDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('archived')
  findAllArchived() {
    return this.service.findAllArchived();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBrandDto) {
    return this.service.update(id, dto);
  }

  @Patch(':id/attachment')
  @UseInterceptors(FileInterceptor('file', localImageMulterOptions))
  updateAttachment(@Param('id') id: string, @UploadedFile(new ImageParseFilePipe()) file: Express.Multer.File) {
    const logoUrl = file.path || (file as any).location;
    return this.service.updateAttachment(id, logoUrl);
  }

  @Patch(':id/archive')
  archive(@Param('id') id: string) {
    return this.service.archive(id);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.service.softDelete(id);
  }

  @Delete(':id/hard')
  hardDelete(@Param('id') id: string) {
    return this.service.hardDelete(id);
  }
}
