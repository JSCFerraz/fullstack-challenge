import { Router } from "express";
import { clientLoginController } from "../controllers/login.controller";
import verifyDataIsValidMiddleware from "../middlewares/verifyDataIsValid.middleware";
import clientLoginSchema from "../schemas/login.schemas";
const loginRoute: Router = Router();

loginRoute.post(
  "",
  verifyDataIsValidMiddleware(clientLoginSchema),
  clientLoginController
);

export default loginRoute;
