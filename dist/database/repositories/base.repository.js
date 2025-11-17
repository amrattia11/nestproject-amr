"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(doc) {
        return (await this.model.create(doc));
    }
    async findOne(filter, select) {
        return this.model.findOne(filter).select(select ?? undefined).lean().exec();
    }
    async findById(id, select) {
        return this.model.findById(id).select(select ?? undefined).lean().exec();
    }
    async updateOne(filter, update) {
        await this.model.updateOne(filter, update).exec();
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map