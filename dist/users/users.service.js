"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const hash_util_1 = require("../utils/hash.util");
let UsersService = class UsersService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async signupLocal(dto) {
        const exists = await this.repo.findOne({ email: dto.email });
        if (exists)
            throw new common_1.BadRequestException('Email already registered');
        const created = (await this.repo.create({
            email: dto.email,
            name: dto.name,
            password: dto.password ? await hash_util_1.HashUtils.hash(dto.password) : undefined,
            emailConfirmToken: Math.random().toString(36).slice(2),
        }));
        return { id: created?._id?.toString?.(), email: created.email, name: created.name };
    }
    async validateUser(email, password) {
        const user = (await this.repo.findOne({ email }, '+password'));
        if (!user || !user.password)
            return null;
        const ok = await hash_util_1.HashUtils.compare(password, user.password);
        if (!ok)
            return null;
        return user;
    }
    async confirmEmail(token) {
        const user = (await this.repo.findOne({ emailConfirmToken: token }));
        if (!user)
            throw new common_1.NotFoundException('Invalid token');
        await this.repo.updateOne({ email: user.email }, { $unset: { emailConfirmToken: 1 }, $set: { emailConfirmed: true } });
        return { email: user.email, emailConfirmed: true };
    }
    async createOrFindGoogle(profile) {
        const existing = (await this.repo.findOne({ email: profile.email }));
        if (existing)
            return existing;
        return this.repo.create({
            email: profile.email,
            name: profile.name,
            googleId: profile.googleId,
            emailConfirmed: true,
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map