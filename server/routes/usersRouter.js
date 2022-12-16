import {Router} from "express";
import {
    addUser,
    deletebyId,
    getAllUsers,
    getUser,
    updateById,
 } from "../controllers/user_controllers.js";
import { checkTheReqBody } from "../middleware/middleware.js";
export const usersRouter = Router()

usersRouter.post("/",(req,res,next) => {checkTheReqBody(['name','lastName','age'],req.body,res,next)}, addUser);
usersRouter.get("/", getAllUsers)
usersRouter.put("/", updateById)
usersRouter.get('/user', getUser)
usersRouter.delete('/user', deletebyId)


