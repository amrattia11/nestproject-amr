import { AuthenticationService } from './auth.service';
import { SignupBodyDto } from 'src/dto/signup.dto';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    signup(body: SignupBodyDto): {
        message: string;
        data: {
            userId: number;
        };
    };
    login(): string;
}
