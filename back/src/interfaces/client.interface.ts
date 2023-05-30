import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Client } from "../entities";
import {
  clientSchema,
  clientSchemaRequest,
  clientSchemaResponse,
  // returnMultipleUserSchema,
  // userReturnSchema,
  // userSchema,
} from "../schemas/client.schemas";

type TClient = z.infer<typeof clientSchema>;
type TClientRequest = z.infer<typeof clientSchemaRequest>;
type TClientResponse = z.infer<typeof clientSchemaResponse>;
type TClientUpdateRequest = DeepPartial<Client>;
type TClientRepo = Repository<Client>;

// type TUser = z.infer<typeof userSchema>;
// type TUserReturn = z.infer<typeof userReturnSchema>;
// type TUserUpdate = DeepPartial<User>;
// type TUserRepo = Repository<User>;
// type TAllUsersReturn = z.infer<typeof returnMultipleUserSchema>;

export {
  TClient,
  TClientRepo,
  TClientRequest,
  TClientResponse,
  TClientUpdateRequest,
};
