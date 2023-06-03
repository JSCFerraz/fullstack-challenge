import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/app.errors";

const verifyTokenIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authToken: string | undefined = req.headers.authorization;
  console.log("BACK 111", authToken);
  if (!authToken) {
    throw new AppError("Invalid token.", 401);
  }

  const token: string = authToken.split(" ")[1];

  verify(token, String(process.env.SECRET_KEY)!, (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
    console.log(decoded.sub);
    req.client = {
      clientId: decoded.sub,
    };
  });

  return next();
};

export default verifyTokenIsValidMiddleware;
