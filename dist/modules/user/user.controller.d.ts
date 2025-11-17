import { UserService } from "./user.service";
import { IUser } from "src/commen";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    allUsers(): {
        message: string;
        data: {
            users: IUser[];
        };
    };
}
