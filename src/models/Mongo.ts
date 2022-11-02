
import { MongoClient } from "mongodb";


export default class Mongo {
  private _uri: string
  private _client: MongoClient

  constructor(uri: string = '') {
    this._uri = uri
    this._client = new MongoClient(this._uri)

  }

  public Connect() {

    this._client.connect()
      .then(client => {
        console.log("Database Connected")
      })
      .catch(err => console.error(err))

  }
  public Insert(hum: number, temp: number) {
    let date = new Date()
    const db = this._client.db(String(process.env.DB_NAME))
    const collections = db.collection(String(process.env.COLLECTION_NAME))
    collections.insertOne({
      date: new Date().toDateString(),
      clock: new Date().toLocaleTimeString(),
      humidity: hum,
      temperature: temp
    }).then(res => {
      console.log("Insert data success")
      return res
    })
      .catch(err => console.error(err))
  }
  public List() {

    const db = this._client.db(String(process.env.DB_NAME))
    const collections = db.collection(String(process.env.COLLECTION_NAME))
    return collections.find()
  }


}