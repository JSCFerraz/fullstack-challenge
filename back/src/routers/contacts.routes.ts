import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listAllContactsByClientIdController,
  updateContactController,
} from "../controllers/contact.controller";
import verifyDataIsValidMiddleware from "../middlewares/verifyDataIsValid.middleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyToken.middleware";
import verifyContactEmailExistsMiddleware from "../middlewares/contacts/verifyClientContactExists.middleware";
import { contactSchema, contactUpdateSchema } from "../schemas/contact.schemas";
import verifyClientContactExistsMiddleware from "../middlewares/contacts/verifyClientContactExists.middleware";
import verifyContactIdExistsMiddleware from "../middlewares/contacts/verifyContactIdExists.middleware";
import { updateClientController } from "../controllers/client.controller";
import verifyClientEmailExistsMiddleware from "../middlewares/clients/verifyClientEmailExists.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  verifyDataIsValidMiddleware(contactSchema),
  verifyTokenIsValidMiddleware,
  verifyClientContactExistsMiddleware,
  createContactController
);

contactsRoutes.get(
  "",
  verifyTokenIsValidMiddleware,
  listAllContactsByClientIdController
);

contactsRoutes.patch(
  "/:id",
  verifyContactIdExistsMiddleware,
  verifyDataIsValidMiddleware(contactUpdateSchema),
  verifyTokenIsValidMiddleware,
  verifyClientContactExistsMiddleware,
  updateContactController
);

contactsRoutes.delete(
  "/:id",
  verifyContactIdExistsMiddleware,
  verifyTokenIsValidMiddleware,
  deleteContactController
);

export default contactsRoutes;
