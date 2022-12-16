import {Schema} from "mongoose";


const userSchema = new Schema({
   name: {
      type:String,
      trim:true
   },
   lastName: {
      type:String,
      trim:true
   },
   accounts: []
})

export {userSchema}




