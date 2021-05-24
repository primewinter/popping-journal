import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./db.js";

import apiRouter from "./controllers/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apiRouter);

app.listen(PORT, ()=> { 
    console.log(`💡SERVER created : ${PORT}`); 
})