"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class Mongo {
    constructor(uri = '') {
        this._uri = uri;
        this._client = new mongodb_1.MongoClient(this._uri);
    }
    Connect() {
        this._client.connect()
            .then(client => {
            console.log("Database Connected");
        })
            .catch(err => console.error(err));
    }
    Insert(hum, temp) {
        let date = new Date();
        const db = this._client.db(String(process.env.DB_NAME));
        const collections = db.collection(String(process.env.COLLECTION_NAME));
        collections.insertOne({
            date: new Date().toDateString(),
            clock: new Date().toLocaleTimeString(),
            humidity: hum,
            temperature: temp
        }).then(res => {
            console.log("Insert data success");
            return res;
        })
            .catch(err => console.error(err));
    }
    List() {
        const db = this._client.db(String(process.env.DB_NAME));
        const collections = db.collection(String(process.env.COLLECTION_NAME));
        return collections.find();
    }
}
exports.default = Mongo;
