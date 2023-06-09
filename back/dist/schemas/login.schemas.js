"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const clientLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email().max(45),
    password: zod_1.z.string().min(4).max(20),
});
exports.default = clientLoginSchema;
