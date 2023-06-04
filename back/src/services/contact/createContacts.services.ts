import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import AppError from "../../errors/app.errors";
import { TClientRepo } from "../../interfaces/client.interface";
import {
  TContact,
  TContactRepo,
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contact.interface";
import { contactSchemaResponse } from "../../schemas/contact.schemas";

const createContactService = async (
  contactData: TContact,
  clientId: string
): Promise<TContactResponse> => {
  const contactRepo: TContactRepo = AppDataSource.getRepository(Contact);
  const clientRepo: TClientRepo = AppDataSource.getRepository(Client);

  const findClient: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  const findAllcontacts: Contact[] | null = await contactRepo.find({
    where: {
      registeredBy: { id: clientId },
      email: contactData.email,
    },
  });

  if (findAllcontacts.length) {
    throw new AppError("A client contact with this email aready exists.", 409);
  }

  const createContact: Contact = contactRepo.create({
    name: contactData.name,
    email: contactData.email,
    phone: contactData.phone,
    registeredBy: findClient!,
  });

  await contactRepo.save(createContact);

  const newContact: TContactResponse =
    contactSchemaResponse.parse(createContact);

  return newContact;
};
export default createContactService;
