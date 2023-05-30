import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import AppError from "../../errors/app.errors";
import { TClientRepo } from "../../interfaces/client.interface";
import {
  TContactRepo,
  TContactResponse,
} from "../../interfaces/contact.interface";
import {
  contactSchemaResponse,
  multipleContactsResponseSchema,
} from "../../schemas/contact.schemas";

const listAllContactsByClientIdService = async (
  clientId: string
): Promise<Contact[]> => {
  const contactRepo: TContactRepo = AppDataSource.getRepository(Contact);

  const clientRepo: TClientRepo = AppDataSource.getRepository(Client);
  const findClient: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  const findClientContacts: Contact[] | null = await contactRepo
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.registeredBy", "clients")
    .where("contacts.registeredBy = :client", {
      client: clientId,
    })
    .getMany();

  // console.log(findClientContacts);

  // if (findClientContacts) {
  //   throw new Error("This client contact aready exists.");
  // }

  // const contacts: Array<TContactResponse> =
  //   multipleContactsResponseSchema.parse(findClientContacts);

  return findClientContacts!;
};

export default listAllContactsByClientIdService;
