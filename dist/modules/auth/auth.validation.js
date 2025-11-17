"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupValidation = zod_1.default.strictObject({
    username: zod_1.default.string().min(2),
    email: zod_1.default.email(),
    password: zod_1.default
        .string()
        .regex(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/),
    confirmPassword: zod_1.default
        .string()
        .regex(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/),
}).superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
        ctx.addIssue({
            code: "custom",
            message: "password mismatch confirm password",
            path: ['confirmPassword']
        });
    }
});
//# sourceMappingURL=auth.validation.js.map