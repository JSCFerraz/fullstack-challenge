import { z } from "zod";

const clientLoginSchema = z.object({
  email: z.string().email().max(45),
  password: z.string().min(4).max(20),
});

export default clientLoginSchema;
