import { Injectable, Optional } from '@nestjs/common';
import { ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';

@Injectable()
export class ImageParseFilePipe extends ParseFilePipe {
  constructor(@Optional() maxSize: number = 5 * 1024 * 1024) {
    super({
      validators: [
        new MaxFileSizeValidator({ maxSize }),
        new FileTypeValidator({ fileType: /(jpeg|jpg|png|webp)$/ }),
      ],
      fileIsRequired: true,
    });
  }
}
