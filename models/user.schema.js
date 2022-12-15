import {Schema} from "mongoose";
import validator from "validator";

const userSchema = new Schema({
   name: {
      type:String
   },
   lastName: {
      type:String
   },
   accounts: {
      type: Array
   }
})

export {userSchema}




