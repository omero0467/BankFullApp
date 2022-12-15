import {connect, set} from "mongoose";
set("strictQuery", true);
connect(
   "mongodb+srv://Bash:8171aH5DXen7wGGN@cluster0.0nzxfm0.mongodb.net/OmrNfrBsr",
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
