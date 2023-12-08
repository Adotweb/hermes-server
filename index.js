const http = require("http");
const express = require("express");
const app = express();
const path = require("path")
const server = http.createServer(app)

const {WebSocketServer} = require("ws");

const wss = new WebSocketServer({server})

wss.on("connection", ws => {
	console.log("connection")
	ws.on("message", msg => {

	})
})

const cors = require("cors");

const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "static")))
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE")
	next()
})


app.post("login", (req, res) => {
	const {api_key} = req.body;
	


	res.send()

})


server.listen(PORT)

