import {Schema} from "mongoose";


const accountSchema = new Schema ({
   cash: {
      type:Number
   },
   credit:{
      type:Number
   }
})

export {accountSchema}
