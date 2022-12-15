import express, {json} from "express";
import './db/mongoose.js'
import { indexBank } from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(json());

app.use("/api", indexBank);

app.listen(PORT, () => {
   console.log(` app listening on port ${PORT}`);
});
