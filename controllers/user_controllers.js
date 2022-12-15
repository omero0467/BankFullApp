import {
   addUserToMongoose,
   getAllUsersFromMongoose,
   getAUserFromMongoose,
   // getActiveProductsFromMongoose,
   // getByPriceRangeFromMongoose,
   updateUserFromMongoose,
   deleteUserFromMongoose,
   // deleteAllProductsFromMongoose,
} from "../services/bank.mongoose.js";

export const addUser = async (req, res) => {
   try {
      const newUser = await addUserToMongoose(req.body);
      res.status(201).send(newUser);
   } catch (error) {
      if (error.name === "MongoServerError" && error.code === 11000) {
         res.status(409).send("There was a duplicate key error");
      }
   }
};

export const getAllUsers = async (req, res) => {
   try {
      const allUsers = await getAllUsersFromMongoose();
      res.status(200).send(allUsers);
   } catch (error) {
      res.status(404).send("error" + error);
   }
};

export const getUser = async (req, res) => {
   try {
      const Product = await getAUserFromMongoose(req.body);
      res.status(200).send(Product);
   } catch (error) {
      res.status(404).send("error" + error);
   }
};

// const getActiveProducts = async (req, res) => {
//    try {
//       const Product = await getActiveProductsFromMongoose();
//       res.status(200).send(Product);
//    } catch (err) {
//       res.status(404).send("error" + err);
//    }
// };

// const getByPriceRange = async (req, res) => {
//    try {
//       const Product = await getByPriceRangeFromMongoose(
//          req.query.min,
//          req.query.max
//       );
//       res.status(200).send(Product);
//    } catch (error) {
//       res.status(404).send("error" + error);
//    }
// };

// export const getBy = (req, res) => {
//    if (req.query.min && req.query.max) {
//       return getByPriceRange(req, res);
//    } else if (req.query.active === "true") {
//       return getActiveProducts(req, res);
//    }
//    return getProduct(req, res);
// };

export const updateById = async (req, res) => {
   try {
      const User = await updateUserFromMongoose( req.body );
      res.status(200).send(User);
   } catch (error) {
      res.status(404).send("error" + error);
   }
};

export const deletebyId = async (req, res) => {
   const {id} = req.params;
   try {
      const User = await deleteUserFromMongoose(id);
      res.status(200).send(User);
   } catch (error) {
      res.status(500).send("error" + error);
   }
};

// export const deleteAllProducts = async (req, res) => {
//    const {id} = req.params;
//    try {
//       const Product = await deleteAllProductsFromMongoose(id);
//       res.status(200).send(Product);
//    } catch (error) {
//       res.status(404).send("error" + error);
//    }
// };
