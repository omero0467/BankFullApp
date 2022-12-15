import {Router} from "express";
import {
    addUser,
    getAllUsers,
    getUser,
    // getBy,
    updateById,
    // deletebyId,
    // deleteAllProducts,
 } from "../controllers/user_controllers.js";

export const usersRouter = Router()

usersRouter.post("/", addUser);
usersRouter.get("/", getAllUsers)
usersRouter.put("/", updateById)
usersRouter.get('/user', getUser)

// localhost:8000/api/users/user
// {
    // "_id":"alsdlasjhdlNOFAR---MAYMONNNNNNjahkw"
// }

