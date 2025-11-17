import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly users;
    constructor(users: UsersService);
    signup(dto: CreateUserDto): Promise<{
        id: any;
        email: string;
        name: string;
    }>;
    confirm(token: string): Promise<{
        email: string;
        emailConfirmed: boolean;
    }>;
}
