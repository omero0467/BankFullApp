import {Router} from "express";
import { usersRouter } from "./usersRouter.js";
import { accountsRouter } from "./accountsRouter.js";


export const indexBank = Router();

indexBank.use('/users',usersRouter)
indexBank.use('/accounts',accountsRouter)


