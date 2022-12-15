import {connect, set} from "mongoose";
import dotnev from 'dotenv'
dotnev.config()
set("strictQuery", true);
connect(
   `mongodb+srv://${process.env.CLUSTER_NAME}:${process.env.CLUSTER_PASS}@cluster0.0nzxfm0.mongodb.net/OmrNfrBsr`,
   (error, mongoConnection) => {
      // console.log("connected to server...");
      if (error) {
         console.log(error);
      }
      if (!process.env.NODE_ENV) {
         const {host, port, name} = mongoConnection;
         console.log({host, port, name});
      }
   }
);
