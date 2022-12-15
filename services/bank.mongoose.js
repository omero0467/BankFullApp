import {User} from "../models/User.model.js";

export const addUserToMongoose = async (body) => {
   const user = await User.create(body);
   return user;
};

// export const getAllUsersFromMongoose = async () => {
//    const allProducts = await Product.find({});
//    if (allProducts.length == 0) {
//       return "No Products Found";
//    } else {
//       return allProducts;
//    }
// };

// export const getAUserFromMongoose = async (body) => {
//    const allUsers = await Product.findOne(body);
//    if (allUsers) {
//       return allUsers;
//    } else {
//       return "No Product Find With This Id";
//    }
// };

// export const getActiveUsersFromMongoose = async () => {
//    const activeUsers = await Product.find({isActive: true});
//    return activeUsers;
// };

// export const getByPriceRangeFromMongoose = async (min, max) => {
//    const allProducts = await Product.find({
//       "details.price": {$gt: Number(min), $lt: Number(max)},
//    });
//    return allProducts;
// };

// export const updateUserFromMongoose = async (id, active) => {
//    const user = await Product.updateOne(
//       {_id: id},
//       {$set: {isActive: active}}
//    );
//    return user;
// };

// export const deleteUserFromMongoose = async (id) => {
//    const user = await User.deleteOne({_id: id});
//    if (user.deletedCount === 1) {
//       console.log("Successfully deleted one document.");
//    } else {
//       console.log("No documents matched the query. Deleted 0 documents.");
//    }
//    return product;
// };

// export const deleteAllProductsFromMongoose = async () => {
//    const product = await Product.deleteMany({});
//    const message = "Deleted " + product.deletedCount + " documents";
//    return message;
// };
