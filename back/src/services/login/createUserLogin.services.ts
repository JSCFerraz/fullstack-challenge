import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import "dotenv/config";
import { Repository } from "typeorm";
import AppError from "../../errors/app.errors";
import TClientLogin from "../../interfaces/login.interface";

const createUserLoginService = async (
  loginData: TClientLogin
): Promise<string> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    email: loginData.email,
  });

  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }

  if (client.deletedAt !== null) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      clientId: client.id,
    },
    String(process.env.SECRET_KEY!),
    {
      expiresIn: String(process.env.EXPIRES_IN!),
      subject: String(client.id),
    }
  );

  return token;
};

export default createUserLoginService;
