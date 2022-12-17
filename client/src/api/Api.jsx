import axios from 'axios'
 let url = 'https://bank-a8n2.onrender.com/api'

 if(process.env.NODE_ENV === 'production'){
    url = '/api'
   }

 export const  Api = axios.create({
   baseURL:url
 }) 
