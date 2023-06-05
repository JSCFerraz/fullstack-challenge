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

  const findAllcontacts: Contact[] | null = await contactRepo.find({
    where: {
      registeredBy: { id: clientId },
    },
  });

  return findAllcontacts!;
};

export default listAllContactsByClientIdService;
