import express, { Express, Router } from "express"
import { addSensorData, viewData } from "../controlerrs/Controlerrs";

const route: Router = Router()
route.get('/', addSensorData)
route.post('/sensor', viewData)


export default route