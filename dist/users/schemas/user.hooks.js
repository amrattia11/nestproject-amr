"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const hash_util_1 = require("../../utils/hash.util");
user_schema_1.UserSchema.pre('save', async function (next) {
    const doc = this;
    if (doc.isModified('password') && doc.password) {
        doc.password = await hash_util_1.HashUtils.hash(doc.password);
    }
    next();
});
exports.default = user_schema_1.UserSchema;
//# sourceMappingURL=user.hooks.js.map