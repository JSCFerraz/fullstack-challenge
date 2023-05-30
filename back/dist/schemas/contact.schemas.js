"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleContactsResponseSchema = exports.contactSchemaUpdateResponse = exports.contactUpdateSchema = exports.contactSchemaResponse = exports.contactSchemaRequest = exports.contactSchema = void 0;
const zod_1 = require("zod");
const contactSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(45),
    email: zod_1.z.string().email().max(45),
    phone: zod_1.z.string(),
    // registeredBy: clientSchema.optional(),
});
exports.contactSchema = contactSchema;
const contactSchemaRequest = contactSchema;
exports.contactSchemaRequest = contactSchemaRequest;
const contactSchemaResponse = contactSchema.extend({
    id: zod_1.z.string(),
    // registeredBy: clientSchemaResponse,
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    deletedAt: zod_1.z.string().nullable(),
});
exports.contactSchemaResponse = contactSchemaResponse;
const contactSchemaUpdateResponse = contactSchema.extend({
    id: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    deletedAt: zod_1.z.string().nullable(),
});
exports.contactSchemaUpdateResponse = contactSchemaUpdateResponse;
const contactUpdateSchema = contactSchemaRequest.partial();
exports.contactUpdateSchema = contactUpdateSchema;
const multipleContactsResponseSchema = contactSchemaResponse.array();
exports.multipleContactsResponseSchema = multipleContactsResponseSchema;
