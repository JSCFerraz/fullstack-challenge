import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import {
  TContactRepo,
  TContactResponse,
} from "../../interfaces/contact.interface";
import { multipleContactsResponseSchema } from "../../schemas/contact.schemas";

const listAllContactsService = async (): Promise<Array<TContactResponse>> => {
  const clientRepo: TContactRepo = AppDataSource.getRepository(Contact);

  const findContacts: Array<Contact> = await clientRepo.find({});

  const allContacts: Array<TContactResponse> =
    multipleContactsResponseSchema.parse(findContacts);

  return allContacts;
};

export default listAllContactsService;
