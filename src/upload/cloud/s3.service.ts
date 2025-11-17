import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';

@Injectable()
export class S3StorageService {
  private readonly bucket = process.env.AWS_S3_BUCKET as string;
  constructor(private readonly s3: S3Client) {}

  async uploadBuffer(key: string, buffer: Buffer, contentType: string) {
    await this.s3.send(new PutObjectCommand({ Bucket: this.bucket, Key: key, Body: buffer, ContentType: contentType }));
    return { key, url: `https://${this.bucket}.s3.amazonaws.com/${key}` };
  }

  async deleteObject(key: string) {
    await this.s3.send(new DeleteObjectCommand({ Bucket: this.bucket, Key: key }));
    return { key };
  }
}
