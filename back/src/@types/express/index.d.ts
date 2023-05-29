import * as express from "express";
import { iClient } from "../../interfaces/client.interface";

declare global {
  namespace Express {
    interface Request {
      client: {
        clientId: string;
      };
    }
  }
}
