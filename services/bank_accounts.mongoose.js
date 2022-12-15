import { Account } from "../models/account.model.js";
import { User } from "../models/User.model.js";

export const checkTheReqBody = (arr,body,next,res) =>{
   const updateFields = arr;
   const reqFields = Object.keys(body);
   if( updateFields.every((key) => reqFields.includes(key))){
       next()
    } res.status(400).send('Please Include userId it the body of the request')
}

export const addAccountToMongoose =async (body) =>{
    try {
            const {cash, credit, userId} = body
            await User.findOne({_id:userId})
            const newAccount = await Account.create({cash:cash?cash:0,credit:credit?credit:0})
            await User.updateOne({_id:userId},{$push:{accounts:newAccount._id}})
            return newAccount
    } catch (error) {
        return  error
    }
}

//!need to hanlde addAccount Error

