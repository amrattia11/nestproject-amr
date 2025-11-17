import multerS3 from 'multer-s3';
import { imageFileFilter, maxFileSizeBytes } from '../multer.validation';
import { s3Client } from './awss3.client';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

const bucket = process.env.AWS_S3_BUCKET!;

export const s3ImageMulterOptions: MulterOptions = {
  storage: multerS3({
    s3: s3Client,
    bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (_req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (_req, file, cb) => {
      const ext = file.originalname.split('.').pop()?.toLowerCase() ?? 'bin';
      const name = Date.now() + '-' + Math.random().toString(36).slice(2);
      cb(null, `uploads/${name}.${ext}`);
    },
  }),
  fileFilter: imageFileFilter,
  limits: { fileSize: maxFileSizeBytes },
};
