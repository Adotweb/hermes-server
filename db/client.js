require("dotenv").config()

const URI = process.env.MURI;
const DB = process.env.DB;

const {MongoClient, ServerApiVersion} = require("mongodb")


const client =  new MongoClient(URI, {
	serverApi:ServerApiVersion.v1
})

module.exports = {
	client	
}
