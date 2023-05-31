import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import handleErrorMiddleware from "./middlewares/handleErrors.middleware";
import loginRoute from "./routers/login.routes";
import clientRoutes from "./routers/clients.routes";
import contactsRoutes from "./routers/contacts.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/clients", clientRoutes);
app.use("/login", loginRoute);
app.use("/contacts", contactsRoutes);

app.use(handleErrorMiddleware);

export default app;
