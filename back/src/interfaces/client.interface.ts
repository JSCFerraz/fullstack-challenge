import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Client } from "../entities";
import {
  clientSchema,
  clientSchemaRequest,
  clientSchemaResponse,
} from "../schemas/client.schemas";

type TClient = z.infer<typeof clientSchema>;
type TClientRequest = z.infer<typeof clientSchemaRequest>;
type TClientResponse = z.infer<typeof clientSchemaResponse>;
type TClientUpdateRequest = DeepPartial<Client>;
type TClientRepo = Repository<Client>;

export {
  TClient,
  TClientRepo,
  TClientRequest,
  TClientResponse,
  TClientUpdateRequest,
};
