import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    categories(): {
        message: string;
        data: {
            categories: {
                id: number;
                name: string;
            }[];
        };
    };
}
