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
  // const payLoad = {
  //   registeredBy: req.client.clientId,
  //   ...req.body,
  // };
  const contact: TContactResponse = await createContactService(
    req.body,
    req.client.clientId
  );

  return res.status(201).json(contact);
};

const listAllContactsByClientIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allContacts: Contact[] | null = await listAllContactsByClientIdService(
    req.client.clientId
  );

  return res.status(200).json(allContacts);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact: TContactUpdateResponse | void = await updateContactService(
    req.body,
    req.params.id,
    req.client.clientId
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
