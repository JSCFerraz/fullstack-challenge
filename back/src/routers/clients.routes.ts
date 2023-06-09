import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientController,
  updateClientController,
} from "../controllers/client.controller";
import verifyClientEmailExistsMiddleware from "../middlewares/clients/verifyClientEmailExists.middleware";
import verifyUserEmailExistsMiddleware from "../middlewares/clients/verifyClientEmailExists.middleware";
import verifyDataIsValidMiddleware from "../middlewares/verifyDataIsValid.middleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyToken.middleware";
import { clientSchema } from "../schemas/client.schemas";
import verifyClientIdExistsMiddleware from "../middlewares/clients/verifyClientIdExists.middleware";
import { clientUpdateSchema } from "../schemas/client.schemas";
import listClientService from "../services/client/listClient.services";

const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  verifyDataIsValidMiddleware(clientSchema),
  verifyClientEmailExistsMiddleware,
  createClientController
);

clientRoutes.get("", verifyTokenIsValidMiddleware, listClientController);

clientRoutes.patch(
  "/:id",
  verifyDataIsValidMiddleware(clientUpdateSchema),
  verifyTokenIsValidMiddleware,
  verifyClientIdExistsMiddleware,
  verifyUserEmailExistsMiddleware,
  updateClientController
);

clientRoutes.delete(
  "/:id",
  verifyClientIdExistsMiddleware,
  verifyTokenIsValidMiddleware,
  deleteClientController
);

clientRoutes.get("", verifyTokenIsValidMiddleware, listClientService);

export default clientRoutes;
