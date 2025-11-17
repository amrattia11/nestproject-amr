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
exports.CustomValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
let CustomValidationPipe = class CustomValidationPipe {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        const { error, success } = this.schema.safeParse(value);
        if (!success) {
            throw new common_1.BadRequestException({
                message: 'validation error',
                cause: {
                    issues: error.issues.map((issue) => {
                        return { path: issue.path, message: issue.message };
                    }),
                },
            });
        }
        return value;
    }
};
exports.CustomValidationPipe = CustomValidationPipe;
exports.CustomValidationPipe = CustomValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [zod_1.ZodType])
], CustomValidationPipe);
//# sourceMappingURL=validation.custom.pipe.js.map