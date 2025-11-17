import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorageFactory } from './multer.disk.config';
import { imageFileFilter, maxFileSizeBytes } from './multer.validation';

export const localImageMulterOptions: MulterOptions = {
  storage: diskStorageFactory(),
  fileFilter: imageFileFilter,
  limits: { fileSize: maxFileSizeBytes },
};
