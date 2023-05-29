import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";

import AppError from "../../errors/app.errors";
import { TClientRepo } from "../../interfaces/client.interface";

const verifyClientIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const clientRepository: TClientRepo = AppDataSource.getRepository(Client);

  const findClient: Client | null = await clientRepository.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!findClient) {
    throw new AppError("Client not fount", 404);
  }

  return next();
};

export default verifyClientIdExistsMiddleware;
