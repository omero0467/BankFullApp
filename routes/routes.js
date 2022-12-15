import {Router} from "express";
import {
   addUser,
   // getAllProducts,
   // getBy,
   // updateById,
   // deletebyId,
   // deleteAllProducts,
} from "../controllers/bank.controller.js";

export const indexBank = Router();

indexBank.post("/product", addUser);
// indexBank.get("/allproducts", getAllProducts);
// indexBank.get("/product", getBy);
// indexBank.put("/product/:id", updateById);
// indexBank.delete("/product/:id", deletebyId);
// indexBank.delete("/product", deleteAllProducts);
