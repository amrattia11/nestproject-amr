import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
type LeanUser = {
    _id?: any;
    email: string;
    name: string;
    password?: string;
    emailConfirmToken?: string;
    emailConfirmed?: boolean;
    googleId?: string;
};
export declare class UsersService {
    private readonly repo;
    constructor(repo: UsersRepository);
    signupLocal(dto: CreateUserDto): Promise<{
        id: any;
        email: string;
        name: string;
    }>;
    validateUser(email: string, password: string): Promise<LeanUser | null>;
    confirmEmail(token: string): Promise<{
        email: string;
        emailConfirmed: boolean;
    }>;
    createOrFindGoogle(profile: {
        email: string;
        name: string;
        googleId: string;
    }): Promise<import("./schemas/user.schema").User | LeanUser>;
}
export {};
