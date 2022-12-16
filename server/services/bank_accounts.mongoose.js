import { Account } from "../models/account.model.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";

export const addAccountToMongoose =async (body) =>{
    try {
            const {cash, credit, userId} = body
            await User.findOne({_id:userId})
            const newAccount = await Account.create({cash:cash?cash:0,credit:credit?credit:0})
            await User.updateOne({_id:userId},{$push:{accounts:newAccount._id}})
            return newAccount
    } catch (error) {
        console.log(error);
        return  error
    }
}

export  const  getAccount = async (req,res)=>{
    try {
        const account = await Account.findOne({ _id : req.params.id })
        if (!account) {
            return res.status(400).send("Account not found!, please make sure field is correct!")
        }
        return res.status(200).send(account)
    } catch (error) {
        res.status(501).send(error.message)
    }
}

export const depositToAccount = async (req,res) => {
    try {
        const { amount } = req.body
        await Account.findOneAndUpdate({ _id:req.body._id } , { $inc:{cash:  amount} })
        const updated = await Account.findOne({_id:req.body._id})
        res.send(updated)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const withdrawFromAccount = async (req,res) => {
    try {
        const { amount } = req.body
        const account = await Account.findOne({_id:req.body._id})
        if(!account){
            return res.status(400).send("Bad Request")
        }
        if(account.credit + account.cash >= amount){
            await Account.findOneAndUpdate({ _id:req.body._id } , { $inc:{cash: -amount} })
        } else if(account.credit + account.cash < amount){
            return res.status(400).send("Not Enough cash!")
        }
        const updated = await Account.findOne({_id:req.body._id})
        return res.status(200).send(updated)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const transfer = async (req,res)=>{
    try {
        const {from, to, amount} = req.body
        const sender = await Account.findOne( { _id : from } )
        if(sender.credit + sender.cash >= amount){
             await Account.updateOne({ _id : from } , { $inc : { cash : -amount } })
            const reciver = await Account.findOneAndUpdate( { _id : to } , { $inc : { cash : amount} } )
            return res.status(202).send('transferd Successfuly')
        }else if (sender.credit + sender.cash < amount){
            return res.status(400).send("The Sender doesn't have Enough cash!")
        }
    } catch (error) {
    res.status(403).send(error.message)
    }
}

export const deleteAccount = async (req,res) => {
    try {
        const {_id}=req.body
        const deletedAccount = await Account.deleteOne( { _id :  _id } )
        if(deletedAccount.deletedCount===0){
            return res.status(400).send('Account Allready Have Been Deleted')
        }
        const deleteReferance = await User.updateMany({},{ $pull : { accounts :   mongoose.Types.ObjectId(_id) } })
        res.status(200).send(deleteReferance)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

