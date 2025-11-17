import { FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class BaseRepository<T> {
  constructor(protected readonly model: Model<T>) {}

  async create(doc: Partial<T>): Promise<T> {
    return (await this.model.create(doc)) as unknown as T;
  }

  async findOne(
    filter: FilterQuery<T>,
    select?: string | Record<string, 0 | 1>,
  ): Promise<T | null> {
    return (this.model as any).findOne(filter).select(select ?? undefined).lean().exec();
  }

  async findById(id: string, select?: string | Record<string, 0 | 1>): Promise<T | null> {
    return (this.model as any).findById(id).select(select ?? undefined).lean().exec();
  }

  async updateOne(filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<void> {
    await (this.model as any).updateOne(filter, update).exec();
  }
}
