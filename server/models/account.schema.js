import {Schema} from "mongoose";
import validator from "validator";


const accountSchema = new Schema ({
   cash: {
      type:Number
   },
   credit:{
      type:Number
   }
})

export {accountSchema}
