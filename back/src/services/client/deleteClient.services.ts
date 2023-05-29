import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { TClientRepo } from "../../interfaces/client.interface";

const deleteUserService = async (clientId: string): Promise<void> => {
  const clientRepository: TClientRepo = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  await clientRepository.softRemove(client!);
};

export default deleteUserService;
