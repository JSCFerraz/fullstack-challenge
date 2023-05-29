import { z } from "zod";
import { clientSchema, clientSchemaResponse } from "./client.schemas";

const contactSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  phone: z.string(),
  registeredBy: clientSchema.optional(),
});

const contactSchemaRequest = contactSchema;

const contactSchemaResponse = contactSchema.extend({
  id: z.string(),
  registeredBy: clientSchemaResponse,
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const contactSchemaUpdateResponse = contactSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const contactUpdateSchema = contactSchemaRequest.partial();

const multipleContactsResponseSchema = contactSchemaResponse.array();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactUpdateSchema,
  contactSchemaUpdateResponse,
  multipleContactsResponseSchema,
};
