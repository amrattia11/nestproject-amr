import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly users;
    private readonly jwt;
    constructor(users: UsersService, jwt: JwtService);
    validateUser(email: string, password: string): Promise<{
        _id?: any;
        email: string;
        name: string;
        password?: string;
        emailConfirmToken?: string;
        emailConfirmed?: boolean;
        googleId?: string;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
}
