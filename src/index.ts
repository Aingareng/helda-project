import express, { Express, Request, Response } from "express";
import Mongo from "./models/Mongo";
import route from "./router/Router";
// import cors from "cors";

import dotenv from "dotenv";
dotenv.config()





// TODO: create app
const app: Express = express();

// app.use(cors())
app.use('/api', route)

app.listen(8000, () => console.log('Server run on port 8000'));
