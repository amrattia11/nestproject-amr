import { CreateProdectDto } from './dto/create-prodect.dto';
import { UpdateProdectDto } from './dto/update-prodect.dto';
export declare class ProdectService {
    create(createProdectDto: CreateProdectDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProdectDto: UpdateProdectDto): string;
    remove(id: number): string;
}
