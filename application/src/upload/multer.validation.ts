import { BadRequestException } from '@nestjs/common';

export const imageFileFilter = (_: any, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
  if (!file.mimetype.match(/\/(jpeg|jpg|png|webp)$/)) {
    return cb(new BadRequestException('Only image files (jpeg,jpg,png,webp) are allowed'), false);
  }
  cb(null, true);
};

export const maxFileSizeBytes = 5 * 1024 * 1024; // 5MB
