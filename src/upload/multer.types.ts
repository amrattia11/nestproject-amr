import { Request } from 'express';

export type DiskDestinationFn = (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => void;
export type DiskFilenameFn = (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => void;

export interface FileMeta {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  path?: string;
  location?: string; // for S3
  key?: string;      // for S3
}
