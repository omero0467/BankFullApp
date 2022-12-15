import {Router} from "express";
import { addAccount } from "../controllers/account_controllers.js";

export const accountsRouter = Router()

accountsRouter.post("/", addAccount);
