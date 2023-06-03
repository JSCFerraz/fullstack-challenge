import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import { TClientRepo } from "../../interfaces/client.interface";
import {
  TContact,
  TContactRepo,
  // TContactRepoCreate,
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contact.interface";
import { contactSchemaResponse } from "../../schemas/contact.schemas";

const createContactService = async (
  contactData: TContact,
  clientId: string
): Promise<TContactResponse> => {
  console.log("BACKBACK", clientId);
  const contactRepository: TContactRepo = AppDataSource.getRepository(Contact);
  const clientRepository: TClientRepo = AppDataSource.getRepository(Client);

  const findClient: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });
  console.log(findClient);

  // const findClientContact: Contact | null = await contactRepository
  //   .createQueryBuilder("contacts")
  //   .innerJoinAndSelect("contacts.registeredBy", "clients")
  //   .where("contacts.email = :email", { email: email })
  //   .andWhere("contacts.registeredBy = :client", {
  //     client: clientId,
  //   })
  //   .getOne();

  // console.log(findClientContact);

  // if (findClientContact) {
  //   throw new Error("This client contact aready exists.");
  // }

  const createContact: Contact = contactRepository.create({
    name: contactData.name,
    email: contactData.email,
    phone: contactData.phone,
    registeredBy: findClient!,
  });

  await contactRepository.save(createContact);

  const newContact: TContactResponse =
    contactSchemaResponse.parse(createContact);
  console.log(newContact);

  return newContact;
};
export default createContactService;
