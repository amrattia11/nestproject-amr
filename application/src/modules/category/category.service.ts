import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    categories(){
        return [{id:1 , name: 'fashon'}]
    }
}

/* Added: Service stubs for attachment/update & soft/hard delete for Category */
export interface CategoryAttachment { imageUrl?: string }

export function _noop<T>(v: T): T { return v }

