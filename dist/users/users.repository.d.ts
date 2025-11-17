import { Model } from 'mongoose';
import { BaseRepository } from '../database/repositories/base.repository';
import { User } from './schemas/user.schema';
export declare class UsersRepository extends BaseRepository<User> {
    private readonly userModel;
    constructor(userModel: Model<User>);
}
