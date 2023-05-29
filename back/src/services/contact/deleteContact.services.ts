import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

import { TContactRepo } from "../../interfaces/contact.interface";

const deleteContactService = async (contactId: string): Promise<void> => {
  const contactRepository: TContactRepo = AppDataSource.getRepository(Contact);

  const findContact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  if (findContact) {
    await contactRepository.remove(findContact);
  }
};

export default deleteContactService;
