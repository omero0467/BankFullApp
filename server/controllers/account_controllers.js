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
        if (accounts.length === 0) {
                return res.status(404).send("No Accounts Found");;
        } 
        return res.status(200).send(accounts);
        } catch (error) {
        res.status(500).send(error);
        }
}