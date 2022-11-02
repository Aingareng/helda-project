"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewData = exports.addSensorData = void 0;
const Mongo_1 = __importDefault(require("../models/Mongo"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const handleDatabase = new Mongo_1.default(process.env.URI);
handleDatabase.Connect();
const DB_PATH = path_1.default.resolve("db.json");
const addSensorData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // handleDatabase.Insert(10.16, 20.16)
    const add = [];
    const x = yield handleDatabase.List().toArray();
    add.push(...x);
    res.json(add).statusCode = 200;
});
exports.addSensorData = addSensorData;
const viewData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    fs_1.default.readFile(DB_PATH, "utf-8", (err, jsonString) => {
        if (err)
            console.log("Error in reading from db");
        let { userId, id, title, body } = req.body;
        let valueArr = JSON.parse(jsonString);
        let obj = { userId, id, title, body };
        valueArr.push(obj);
        console.log(valueArr);
        fs_1.default.writeFile(DB_PATH, JSON.stringify(valueArr), err => {
            if (err)
                console.log("Error in Updating db");
            res.status(200).json({
                message: "Values saved",
                value: valueArr[valueArr.length - 1]
            });
        });
    });
});
exports.viewData = viewData;
