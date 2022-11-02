"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controlerrs_1 = require("../controlerrs/Controlerrs");
const route = (0, express_1.Router)();
route.get('/', Controlerrs_1.addSensorData);
route.post('/sensor', Controlerrs_1.viewData);
exports.default = route;
