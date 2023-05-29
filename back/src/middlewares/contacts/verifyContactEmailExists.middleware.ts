import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import AppError from "../../errors/app.errors";

const verifyContactEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  if (req.body.email) {
    const findUserEmail: Client | null = await userRepository.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (findUserEmail) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
};

export default verifyContactEmailExistsMiddleware;
