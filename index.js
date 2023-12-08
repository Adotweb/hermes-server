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
		
		msg = msg.toString()

		const {type, data} = JSON.parse(msg);
			
		
		switch(type){

			case "host-login":
				hosts.set(data.id, ws);
				
				ws.id = data.id	

				break;

			case "client-login":
				clients.set(data.id, ws);
				
				ws.id = data.id
				break;



			case "host-keepalive":
				
				ws.send(JSON.stringify({
					type:"server-keepalive",
					data:{}
				}))

				break;


			case "client-event":
				
				const {targetHost} = data; 
				
				let host = hosts.get(targetHost) 

				host.send(JSON.stringify({
					type:"client-event",
					data	
				}))

				break;
		}		

	})

	ws.on("close", () => {
		clients.delete(ws.id) 

		console.log(ws.id, clients.size)
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

