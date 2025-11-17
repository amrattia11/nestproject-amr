import { ProdectService } from './prodect.service';
import { CreateProdectDto } from './dto/create-prodect.dto';
import { UpdateProdectDto } from './dto/update-prodect.dto';
export declare class ProdectController {
    private readonly prodectService;
    constructor(prodectService: ProdectService);
    create(createProdectDto: CreateProdectDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProdectDto: UpdateProdectDto): string;
    remove(id: string): string;
}
