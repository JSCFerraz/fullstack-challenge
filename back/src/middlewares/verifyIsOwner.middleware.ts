import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { TContactRepo } from "../interfaces/contact.interface";
import AppError from "../errors/app.errors";
import { type } from "os";

const verifyIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepositoy: TContactRepo = AppDataSource.getRepository(Contact);

  const contactId: string = req.params.id;
  const clientId: string = req.client.clientId;

  const contact = await contactRepositoy.findOne({
    where: {
      id: contactId,
    },
    relations: {
      registeredBy: true,
    },
  });

  if (!contact) {
    throw new AppError("Contact not fount", 404);
  }

  if (contact.registeredBy.id !== clientId) {
    throw new AppError("You don`t have permissions.", 403);
  }

  return next();
};

export { verifyIsOwnerMiddleware };
