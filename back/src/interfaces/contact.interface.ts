import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Contact } from "../entities";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdateResponse,
} from "../schemas/contact.schemas";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;
type TContactUpdateRequest = DeepPartial<Contact>;
type TContactUpdateResponse = z.infer<typeof contactSchemaUpdateResponse>;
type TContactRepo = Repository<Contact>;

export {
  TContact,
  TContactRepo,
  TContactRequest,
  TContactResponse,
  TContactUpdateRequest,
  TContactUpdateResponse,
};
