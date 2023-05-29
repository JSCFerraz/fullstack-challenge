import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import { TClientRepo } from "../../interfaces/client.interface";
import {
  TContact,
  TContactRepo,
  TContactUpdateResponse,
} from "../../interfaces/contact.interface";
import {
  contactSchemaResponse,
  contactSchemaUpdateResponse,
} from "../../schemas/contact.schemas";

const updateContactService = async (
  contactData: TContact,
  contactId: string,
  clientId: string
): Promise<TContactUpdateResponse> => {
  const contactRepo: TContactRepo = AppDataSource.getRepository(Contact);
  const clientRepository: TClientRepo = AppDataSource.getRepository(Client);

  const oldContact: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  const findClient: Client | null = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  const mergeContactData: TContact = { ...oldContact, ...contactData };

  const updatedContact: Contact = contactRepo.create({
    id: contactId,
    name: mergeContactData.name,
    email: mergeContactData.email,
    phone: mergeContactData.phone,
    registeredBy: findClient!,
  });

  await contactRepo.save(updatedContact);

  const newUpdatedContact: TContactUpdateResponse =
    contactSchemaUpdateResponse.parse(mergeContactData);

  return newUpdatedContact;
};

export default updateContactService;
