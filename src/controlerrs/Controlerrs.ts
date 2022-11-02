import { Request, Response } from "express";
import Mongo from "../models/Mongo";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config()

const handleDatabase = new Mongo(process.env.URI)
handleDatabase.Connect()

const DB_PATH = path.resolve("db.json")



const addSensorData = async (req: Request, res: Response) => {

  // handleDatabase.Insert(10.16, 20.16)
  const add = []
  const x = await handleDatabase.List().toArray()
  add.push(...x)
  res.json(add).statusCode = 200


}

const viewData = async (req: Request, res: Response) => {
  fs.readFile(DB_PATH, "utf-8", (err, jsonString) => {
    if (err) console.log("Error in reading from db")
    let { userId, id, title, body } = req.body
    let valueArr: [{}] = JSON.parse(jsonString)
    let obj = { userId, id, title, body }
    valueArr.push(obj)
    console.log(valueArr)

    fs.writeFile(DB_PATH, JSON.stringify(valueArr), err => {
      if (err) console.log("Error in Updating db");
      res.status(200).json({
        message: "Values saved",
        value: valueArr[valueArr.length - 1]
      })
    })
  })


}


export { addSensorData, viewData }


