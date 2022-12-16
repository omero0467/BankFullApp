import {Schema} from "mongoose";


const userSchema = new Schema({
   name: {
      type:String
   },
   lastName: {
      type:String
   },
   accounts: []
})

export {userSchema}




