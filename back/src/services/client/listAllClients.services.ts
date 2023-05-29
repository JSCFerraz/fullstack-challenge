import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import {
  TClientRepo,
  TClientResponse,
} from "../../interfaces/client.interface";
import { multipleClientResponseSchema } from "../../schemas/client.schemas";

const listAllClientsService = async (): Promise<Array<TClientResponse>> => {
  const clientRepo: TClientRepo = AppDataSource.getRepository(Client);

  const findClients: Array<Client> = await clientRepo.find({});

  const allClients: Array<TClientResponse> =
    multipleClientResponseSchema.parse(findClients);

  return allClients;
};

export default listAllClientsService;
