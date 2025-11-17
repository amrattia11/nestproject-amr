import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { v4 as uuid } from 'uuid';
import type { DiskDestinationFn, DiskFilenameFn } from './multer.types';

export const uploadsRoot = join(process.cwd(), 'uploads');

export const diskDestination: DiskDestinationFn = (_req, _file, cb) => {
  cb(null, uploadsRoot);
};

export const diskFileName: DiskFilenameFn = (_req, file, cb) => {
  const unique = uuid();
  cb(null, unique + extname(file.originalname).toLowerCase());
};

export const diskStorageFactory = () => diskStorage({ destination: diskDestination, filename: diskFileName });
