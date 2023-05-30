import { Request, Response } from "express";
import { TClient, TClientResponse } from "../interfaces/client.interface";
import createClientService from "../services/client/createClient.services";
import deleteClientService from "../services/client/deleteClient.services";
import updateClientService from "../services/client/updateClient.services";
import listClientService from "../services/client/listClient.services";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData: TClient = req.body;
  const client: TClientResponse = await createClientService(clientData);

  return res.status(201).json(client);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client: TClientResponse = await updateClientService(
    req.body,
    req.params.id
  );
  return res.status(200).json(client);
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;
  await deleteClientService(userId);
  return res.status(204).json();
};

const listClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client: TClientResponse = await listClientService(req.params.id);

  return res.status(200).json(client);
};

export {
  createClientController,
  deleteClientController,
  updateClientController,
  listClientController,
};
