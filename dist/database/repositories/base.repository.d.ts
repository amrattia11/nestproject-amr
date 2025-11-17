import { FilterQuery, Model, UpdateQuery } from 'mongoose';
export declare abstract class BaseRepository<T> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    create(doc: Partial<T>): Promise<T>;
    findOne(filter: FilterQuery<T>, select?: string | Record<string, 0 | 1>): Promise<T | null>;
    findById(id: string, select?: string | Record<string, 0 | 1>): Promise<T | null>;
    updateOne(filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<void>;
}
