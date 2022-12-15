import { addAccountToMongoose } from "../services/bank_accounts.mongoose.js"

export const addAccount = async (req , res) => {
        const newAccount = await addAccountToMongoose(req.body) 
       if(!newAccount._id){
           return res.status(400).send('newAccount.message')
        } 
        res.status(201).send(newAccount)
}
