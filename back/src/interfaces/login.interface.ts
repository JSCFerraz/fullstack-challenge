import { z } from "zod";
import userLoginSchema from "../schemas/login.schemas";

type TClientLogin = z.infer<typeof userLoginSchema>;

export default TClientLogin;
