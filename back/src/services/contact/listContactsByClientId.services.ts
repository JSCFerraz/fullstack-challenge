import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
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

  // const findContacts: Array<Contact> = await contactRepo.find({
  //   // where: { registeredBy.id: clientId },
  // });

  const findClientContacts: Contact[] | null = await contactRepo
    .createQueryBuilder("contacts")
    // .select([
    //   "contacts.id",
    //   "contacts.name",
    //   "contacts.email",
    //   "contacts.phone",
    // ])
    .innerJoinAndSelect("contacts.registeredBy", "clients")
    // .where("contacts.email = :email", { email: email })
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
