import express, { Express, Request, Response } from "express";
import Mongo from "./models/Mongo";
import route from "./router/Router";
// import cors from "cors";

import dotenv from "dotenv";
dotenv.config()





// TODO: create app
const app: Express = express();
app.set('port', (process.env.PORT || 8888))

// app.use(cors())
app.use('/api', route)

app.listen(app.get('port'), () => console.log(`Server run on port ${app.get('port')}`));
