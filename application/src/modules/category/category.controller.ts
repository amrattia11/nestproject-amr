import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
constructor(private readonly categoryService:CategoryService){}    
    
@Get()
categories(){
    const categories = this.categoryService.categories()
    return {message:"Done" , data: {categories}}
}
}

/* Added: Attachment & archive/soft/hard delete endpoints */
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFile, Patch, Delete, Param } from '@nestjs/common';
import { localImageMulterOptions } from '../../upload/multer.routes.options';
import { ImageParseFilePipe } from '../../upload/multer.parse-file.pipe';

// NOTE: The below assumes there are methods on the service with the same names.
