import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import {
  TClientRepo,
  TClientResponse,
} from "../../interfaces/client.interface";
import {
  clientSchemaResponse,
  multipleClientResponseSchema,
} from "../../schemas/client.schemas";

const listClientService = async (
  clientId: string
): Promise<TClientResponse> => {
  const clientRepo: TClientRepo = AppDataSource.getRepository(Client);
  console.log("BACK", clientId);
  const client = await clientRepo.findOne({
    where: {
      id: clientId,
    },
  });
  const clientFound: TClientResponse = clientSchemaResponse.parse(client);

  return clientFound;
};

export default listClientService;
