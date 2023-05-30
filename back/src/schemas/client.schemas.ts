import { z } from "zod";

const clientSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  password: z.string().min(4).max(20),
  phone: z.string().max(13),
});

const clientSchemaRequest = clientSchema;

const clientSchemaResponse = clientSchema
  .extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

const clientUpdateSchema = clientSchemaRequest.partial();

const multipleClientResponseSchema = clientSchemaResponse.array();

export {
  clientSchema,
  clientSchemaResponse,
  clientSchemaRequest,
  clientUpdateSchema,
  multipleClientResponseSchema,
};
