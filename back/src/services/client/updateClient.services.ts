import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import {
  TClient,
  TClientRepo,
  TClientResponse,
} from "../../interfaces/client.interface";
import { clientSchemaResponse } from "../../schemas/client.schemas";

const updateClientService = async (
  userData: TClient,
  clientId: string
): Promise<TClientResponse> => {
  const clientRepo: TClientRepo = AppDataSource.getRepository(Client);
  const oldUser: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  const mergeClientData: TClient = { ...oldUser, ...userData };

  const updatedClient: TClient = clientRepo.create(mergeClientData);

  await clientRepo.save(updatedClient);

  const newUpdatedClient: TClientResponse =
    clientSchemaResponse.parse(updatedClient);

  return newUpdatedClient;
};

export default updateClientService;
