export const checkTheReqBody = (arr,body,res,next) =>{
   const updateFields = arr;
   const reqFields = Object.keys(body);
   if( updateFields.every((key) => reqFields.includes(key))){
       return next()
    } 
    return res.status(400).send(`Please Include ${arr} In The Body Of The Request`)
}