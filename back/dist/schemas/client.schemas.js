"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleClientResponseSchema = exports.clientUpdateSchema = exports.clientSchemaRequest = exports.clientSchemaResponse = exports.clientSchema = void 0;
const zod_1 = require("zod");
const clientSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(45),
    email: zod_1.z.string().email().max(45),
    password: zod_1.z.string().min(4).max(20),
    phone: zod_1.z.string().max(13),
});
exports.clientSchema = clientSchema;
const clientSchemaRequest = clientSchema;
exports.clientSchemaRequest = clientSchemaRequest;
const clientSchemaResponse = clientSchema
    .extend({
    id: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    deletedAt: zod_1.z.string().nullable(),
})
    .omit({ password: true });
exports.clientSchemaResponse = clientSchemaResponse;
const clientUpdateSchema = clientSchemaRequest.partial();
exports.clientUpdateSchema = clientUpdateSchema;
const multipleClientResponseSchema = clientSchemaResponse.array();
exports.multipleClientResponseSchema = multipleClientResponseSchema;
