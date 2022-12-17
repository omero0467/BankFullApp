import express, {json} from "express";
import cors from "cors"
import './server/db/mongoose.js'
import { indexBank } from "./server/routes/routes.js";
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('./', import.meta.url));
console.log(__dirname);
const app = express();
const PORT = process.env.PORT || 8000;
app.use(json());
app.use(cors());
const publicPath = path.join(__dirname, 'server','build');
app.use(express.static(publicPath));
app.use("/api", indexBank);
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'server', 'index.html'));
});


app.listen(PORT, () => {
   console.log(` app listening on port ${PORT}`);
});
