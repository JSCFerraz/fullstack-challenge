import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import {
  TClient,
  TClientRepo,
  TClientRequest,
  TClientResponse,
} from "../../interfaces/client.interface";
import { clientSchemaResponse } from "../../schemas/client.schemas";

const createClientService = async (
  userData: TClientRequest
): Promise<TClientResponse> => {
  const { email } = userData;
  const clientRepository: TClientRepo = AppDataSource.getRepository(Client);
  const findClient = await clientRepository.findOne({
    where: { email },
  });

  if (findClient) {
    throw new Error("Client aready exists.");
  }
  const client: TClient = clientRepository.create(userData);

  await clientRepository.save(client);

  const newClient: TClientResponse = clientSchemaResponse.parse(client);

  return newClient;
};

export default createClientService;
