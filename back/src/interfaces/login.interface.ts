import { z } from "zod";

import clientLoginSchema from "../schemas/login.schemas";

type TClientLogin = z.infer<typeof clientLoginSchema>;

export default TClientLogin;
