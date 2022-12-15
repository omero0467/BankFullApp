import {
   addUserToMongoose,
   // getAllUsersFromMongoose,
   // getAUserFromMongoose,
   // getActiveProductsFromMongoose,
   // getByPriceRangeFromMongoose,
   // updateProductFromMongoose,
   // deleteProductFromMongoose,
   // deleteAllProductsFromMongoose,
} from "../services/product.mongoose.js";

export const addProduct = async (req, res) => {
   try {
      const newProduct = await addUserToMongoose(req.body);
      res.status(201).send(newProduct);
   } catch (error) {
      if (error.name === "MongoServerError" && error.code === 11000) {
         res.status(409).send("There was a duplicate key error");
      }
   }
};

// export const getAllProducts = async (req, res) => {
//    try {
//       const allProducts = await getAllUsersFromMongoose();
//       res.status(200).send(allProducts);
//    } catch (error) {
//       res.status(404).send("error" + error);
//    }
// };

// const getProduct = async (req, res) => {
//    try {
//       const Product = await getAUserFromMongoose(req.body);
//       res.status(200).send(Product);
//    } catch (error) {
//       res.status(404).send("error" + error);
//    }
// };

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

// export const updateById = async (req, res) => {
//    const {id} = req.params;
//    try {
//       const Product = await updateProductFromMongoose(
//          id,
//          req.body.active,
//          req.body.discount
//       );
//       res.status(200).send(Product);
//    } catch (error) {
//       res.status(404).send("error" + error);
//    }
// };

// export const deletebyId = async (req, res) => {
//    const {id} = req.params;
//    try {
//       const Product = await deleteProductFromMongoose(id);
//       res.status(200).send(Product);
//    } catch (error) {
//       res.status(404).send("error" + error);
//    }
// };

// export const deleteAllProducts = async (req, res) => {
//    const {id} = req.params;
//    try {
//       const Product = await deleteAllProductsFromMongoose(id);
//       res.status(200).send(Product);
//    } catch (error) {
//       res.status(404).send("error" + error);
//    }
// };
