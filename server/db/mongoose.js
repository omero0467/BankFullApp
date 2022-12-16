import {connect, set} from "mongoose";
import dotnev from 'dotenv'
dotnev.config()

set("strictQuery", true);
const URL = `mongodb+srv://${process.env.CLUSTER_NAME}:${process.env.CLUSTER_PASS}@cluster0.0nzxfm0.mongodb.net/OmrNfrBsr`;
connect( URL, (error, mongoConnection) => {
      if (error) {
         throw new Error('MongoDB connection error: ' + error);
      }
         const {host, port, name} = mongoConnection;
         console.log({host, port, name});
   }
);
