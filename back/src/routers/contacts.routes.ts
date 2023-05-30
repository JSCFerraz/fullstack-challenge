import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listAllContactsByClientIdController,
  updateContactController,
} from "../controllers/contact.controller";
import verifyDataIsValidMiddleware from "../middlewares/verifyDataIsValid.middleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyToken.middleware";
import {
  contactSchema,
  contactSchemaRequest,
  contactUpdateSchema,
} from "../schemas/contact.schemas";
import verifyClientContactExistsMiddleware from "../middlewares/contacts/verifyClientContactExists.middleware";
import verifyContactIdExistsMiddleware from "../middlewares/contacts/verifyContactIdExists.middleware";
import { verifyIsOwnerMiddleware } from "../middlewares/verifyIsOwner.middleware";
import verifyContactEmailExistsMiddleware from "../middlewares/contacts/verifyContactEmailExists.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.use(verifyTokenIsValidMiddleware);

contactsRoutes.post(
  "",
  verifyDataIsValidMiddleware(contactSchemaRequest),
  verifyClientContactExistsMiddleware,
  createContactController
);

contactsRoutes.get("", listAllContactsByClientIdController);

contactsRoutes.patch(
  "/:id",
  verifyIsOwnerMiddleware,
  verifyDataIsValidMiddleware(contactUpdateSchema),
  verifyContactEmailExistsMiddleware,
  updateContactController
);

contactsRoutes.delete("/:id", verifyIsOwnerMiddleware, deleteContactController);

export default contactsRoutes;
