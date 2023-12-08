const http = require("http");
const express = require("express");
const app = express();
const path = require("path")
const server = http.createServer(app)

const {WebSocketServer} = require("ws");

const wss = new WebSocketServer({server})



const hosts = new Map(); 
const clients = new Map();


wss.on("connection", ws => {
	
	ws.on("message", msg => {
		
		const {type, data} = JSON.parse(msg);
	
		console.log(msg)
		
		switch(type){
			case "host-login":
				hosts.set(data.id, ws);
				
				console.log("new host")
				
				break;

			case "client-login":
				clients.set(data.id, ws);
				
				console.log("new client")
				break;
			
			case "disconnect-host":
				hosts.delete(data.id)	

				console.log("host " + data.id + "disconnected")

				break;

			case "disconnect-client": 
				clients.delete(data.id)	
	
				console.log("client " + data.id + "disconnected")			
				break;
		}		

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

