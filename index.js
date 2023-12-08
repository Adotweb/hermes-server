const http = require("http");
const express = require("express");
const app = express();
const {Server} = require("socket.io")
const path = require("path")
const server = http.createServer(app)

const io = new Server(server, {
	cors:{
		origin:"https://discord.com",
		methods:["GET", "POST"],
		credentials:true,
		transports:["websocket", "polling"]
	},
	allowEIO3: true
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


io.on("connection", socket => {
	
		
	console.log(socket.handshake.auth)	


	socket.on("message-h", msg => {
		socket.to(auth.token).emit("message", msg)
	})


	socket.on("message-c", msg => {
		socket.to(auth.token).emit("message", msg)
	})


	socket.on("message-test", msg => {
		console.log(msg)
	})
})

server.listen(PORT)

