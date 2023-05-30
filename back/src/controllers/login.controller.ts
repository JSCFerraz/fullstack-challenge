import { Request, Response } from "express";
import TUserLogin from "../interfaces/login.interface";

import createClientLoginService from "../services/login/createClientLogin.services";

const clientLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userLogin: TUserLogin = req.body;

  const token: string = await createClientLoginService(userLogin);

  return res.json({ token: token });
};

export { clientLoginController };
