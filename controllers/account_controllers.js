import { addAccountToMongoose } from "../services/bank_accounts.mongoose.js"
import { Account } from "../models/account.model.js"

export const addAccount = async (req , res) => {
        const newAccount = await addAccountToMongoose(req.body) 
       if(!newAccount._id){
           return res.status(400).send('No Account created, please make sure all fields are valid')
        } 
        res.status(201).send(newAccount)
}

export const getAllAccounts = async (req,res) =>{
        try {
        const accounts = await Account.find({}); 
        return res.status(200).send(accounts);
        } catch (error) {
        res.status(500).send(error);
        }
}