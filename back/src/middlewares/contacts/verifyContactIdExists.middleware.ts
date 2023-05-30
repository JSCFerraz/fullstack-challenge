import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import AppError from "../../errors/app.errors";
import { TContactRepo } from "../../interfaces/contact.interface";

const verifyContactIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository: TContactRepo = AppDataSource.getRepository(Contact);

  const contactId: string = req.params.id;

  const findContact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  if (!findContact) {
    throw new AppError("Contact not fount", 404);
  }

  return next();
};

export default verifyContactIdExistsMiddleware;
