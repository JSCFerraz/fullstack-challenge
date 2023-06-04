import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import AppError from "../../errors/app.errors";

const verifyContactEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  if (req.body.email) {
    const findContactEmail: Contact | null = await contactRepository.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (findContactEmail) {
      if (findContactEmail.id !== req.params.id) {
        throw new AppError("Contact email already exists.", 409);
      }
    }
  }

  return next();
};

export default verifyContactEmailExistsMiddleware;
