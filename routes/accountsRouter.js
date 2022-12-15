import {Router} from "express";
import { addAccount } from "../controllers/account_controllers.js";
import { User } from "../models/User.model.js";
import { checkTheReqBody } from "../services/bank_accounts.mongoose.js";
export const accountsRouter = Router()

accountsRouter.post("/",(req,res,next)=>{checkTheReqBody(['userId'],req.body,next,res),addAccount});

//  async function checkUser(req,res,next){
//     try {
//        const user = await User.findOne({_id: req.body.userId})
//         next()
//         } catch (error) {
//             res.status(400).send('bad request' + error)
//     }
// }
