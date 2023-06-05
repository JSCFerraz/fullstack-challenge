import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { TContactRepo } from "../interfaces/contact.interface";
import AppError from "../errors/app.errors";

const verifyIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepo: TContactRepo = AppDataSource.getRepository(Contact);

  const contactId: string = req.params.id;
  const clientId: string = req.client.clientId;

  const findAllcontacts: Contact[] | null = await contactRepo.find({
    where: {
      registeredBy: { id: clientId },
      id: contactId,
    },
    relations: {
      registeredBy: true,
    },
  });

  if (!findAllcontacts.length) {
    throw new AppError("Contact not fount", 404);
  }

  if (findAllcontacts[0].registeredBy.id !== clientId) {
    throw new AppError("You don`t have permissions.", 403);
  }

  return next();
};

export { verifyIsOwnerMiddleware };
