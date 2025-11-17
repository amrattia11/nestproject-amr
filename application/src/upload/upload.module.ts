import { Module } from '@nestjs/common';
import { S3Client } from '@aws-sdk/client-s3';
import { S3StorageService } from './cloud/s3.service';

@Module({
  providers: [
    { provide: S3Client, useFactory: () => new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    }) },
    S3StorageService,
  ],
  exports: [S3StorageService],
})
export class UploadModule {}
