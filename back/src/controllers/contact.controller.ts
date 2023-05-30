import { Request, Response } from "express";
import {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactUpdateResponse,
} from "../interfaces/contact.interface";
import updateContactService from "../services/contact/updateContact.services";
import deleteContactService from "../services/contact/deleteContact.services";
import createContactService from "../services/contact/createContacts.services";
import listAllContactsByClientIdService from "../services/contact/listContactsByClientId.services";
import { Contact } from "../entities";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  const newContact: TContactResponse = await createContactService(
    req.body,
    clientId
  );

  return res.status(201).json(newContact);
};

const listAllContactsByClientIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  const allContacts: Contact[] | null = await listAllContactsByClientIdService(
    clientId
  );

  return res.status(200).json(allContacts);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  const contact: TContactUpdateResponse | void = await updateContactService(
    req.body,
    req.params.id,
    clientId
  );
  return res.status(200).json(contact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: string = req.params.id;
  await deleteContactService(contactId);
  return res.status(204).json();
};

export {
  createContactController,
  listAllContactsByClientIdController,
  deleteContactController,
  updateContactController,
};
