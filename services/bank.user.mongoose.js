import {User} from "../models/User.model.js";
import { checkTheReqBody } from "../middleware/middleware.js"; 


export const addUserToMongoose = async (body) => {
   if( checkTheReqBody(['name','lastName'],body)){
      const user = await User.create(body);
      return user;
   }
   return 'Please Fill the following: lastName, name' 
};

export const getAllUsersFromMongoose = async () => {
   const allUsers = await User.find({});
   if (allUsers.length == 0) {
      return "No Products Found";
   } else {
      return allUsers;
   }
};

export const getAUserFromMongoose = async (body) => {
   const allUsers = await User.findOne({"_id":body._id});
   if (allUsers) {
      return allUsers;
   } else {
      return "No Product Find With This Id";
   }
};

export const updateUserFromMongoose = async (body) => {
   const updateFields = ['name','lastName','_id']
   const reqFields = Object.keys(body)
   if( updateFields.every( (key) =>  reqFields.includes( key )  ) ) {
      const updatedUser = await User.updateOne(
         {_id: body._id},
         {$set: {...body}}
         );
         return updatedUser;
      }
      return 'Please Fill the following: lastName, name and _id'
};

export const deleteUserFromMongoose = async (id) => {
   const user = await User.findOneAndDelete({_id: id});
   if (user.deletedCount === 1) {
      console.log("Successfully deleted one document.");
      return {user, msg:"Successfully deleted one document."};
   } else {
      console.log("No documents matched the query. Deleted 0 documents.");
      return "No documents matched the query. Deleted 0 documents."
   }
};


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

// export const deleteAllProductsFromMongoose = async () => {
//    const product = await Product.deleteMany({});
//    const message = "Deleted " + product.deletedCount + " documents";
//    return message;
// };
