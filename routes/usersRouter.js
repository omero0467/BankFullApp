import {Router} from "express";
import {
    addUser,
    deletebyId,
    getAllUsers,
    getUser,
    updateById,
 } from "../controllers/user_controllers.js";

export const usersRouter = Router()

usersRouter.post("/", addUser);
usersRouter.get("/", getAllUsers)
usersRouter.put("/", updateById)
usersRouter.get('/user', getUser)
usersRouter.delete('/user', deletebyId)


