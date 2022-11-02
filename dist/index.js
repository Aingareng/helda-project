"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./router/Router"));
// import cors from "cors";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// TODO: create app
const app = (0, express_1.default)();
// app.use(cors())
app.use('/api', Router_1.default);
app.listen(8000, () => console.log('Server run on port 8000'));
