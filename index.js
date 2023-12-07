const http = require("http");
const express = require("express");
const app = express();
const {Server} = require("socket.io")
const path = require("path")
const server = http.createServer(app)

const io = new Server(server)


const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.static(path.join(__dirname, "static")))



app.post("login", (req, res) => {
	const {api_key} = req.body;
	


	res.send()

})


io.on("connection", socket => {
	
	let auth = socket.handshake.auth 

	socket.join(auth.token);


	socket.on("message-h", msg => {
		socket.to(auth.token).emit("message", msg)
	})


	socket.on("message-c", msg => {
		socket.to(auth.token).emit("message", msg)
	})

})

server.listen(PORT)

