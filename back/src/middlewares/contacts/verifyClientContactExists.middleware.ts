import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import AppError from "../../errors/app.errors";
import { TContactRepo } from "../../interfaces/contact.interface";
import { TClientRepo } from "../../interfaces/client.interface";

const verifyClientContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository: TContactRepo = AppDataSource.getRepository(Contact);
  const clientRepository: TClientRepo = AppDataSource.getRepository(Client);

  // const findContacts: Contact | null = await contactRepository.findOne({
  //   where: {
  //     email: email,
  //   },
  // });
  const findClient: Client | null = await clientRepository.findOne({
    where: {
      id: req.client.clientId,
    },
  });
  console.log(findClient);

  const findClientContact: Contact | null = await contactRepository
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.registeredBy", "clients")
    .where("contacts.email = :email", { email: req.body.email })
    .andWhere("contacts.registeredBy = :client", {
      client: req.client.clientId,
    })
    .getOne();

  console.log(findClientContact);

  if (findClientContact) {
    throw new AppError("This client contact aready exists.", 400);
  }

  // if (req.body.email) {
  //   const findContact: Contact | null = await contactRepository.findOne({
  //     where: {
  //       email: req.body.email,
  //       phone: req.body.phone,
  //     },
  //   });

  //   if (findContact) {
  //     if (findContact.registeredBy.id == req.params.id)
  //       throw new AppError("Contact already exists", 409);
  //   }
  // }

  return next();
};

export default verifyClientContactExistsMiddleware;
