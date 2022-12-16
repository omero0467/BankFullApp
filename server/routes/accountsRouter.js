import {Router} from "express";
import { addAccount,getAllAccounts } from "../controllers/account_controllers.js";
import { depositToAccount, getAccount,withdrawFromAccount, transfer} from "../services/bank_accounts.mongoose.js";
import { checkTheReqBody } from "../middleware/middleware.js";

export const accountsRouter = Router()

accountsRouter.post("/",(req,res,next)=>{checkTheReqBody(['userId'],req.body,res,next)},addAccount);
accountsRouter.get('/', getAllAccounts)
accountsRouter.get('/account',(req,res,next) => {checkTheReqBody(['_id'],req.body,res,next)}, getAccount)
accountsRouter.put("/deposit",(req,res,next) => {checkTheReqBody(['_id','amount'],req.body,res,next)}, depositToAccount )
accountsRouter.put("/transfer",(req,res,next) => {checkTheReqBody(['from','to','amount'],req.body,res,next)}, transfer)
accountsRouter.put("/withdraw",(req,res,next) => {checkTheReqBody(['_id','amount'],req.body,res,next)}, withdrawFromAccount)


