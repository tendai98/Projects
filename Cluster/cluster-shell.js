#!/usr/bin/nodejs

const WebSocketServer = require("ws");
const stdout = process.stdout;
const stdin = process.stdin;
const ADDR_INFO = { port: 9090 };
const Server = new WebSocketServer.Server(ADDR_INFO);

let Connect = null;

Server.on("connection", (evX) => {
    Connect = evX;

    evX.on("message", (data) => {
        stdout.write(data);
    });

    evX.on("close",(data)=>{
	Connect = null;
     });

});

stdin.on("data", (userData) => {
 	if(Connect !== null){
    		Connect.send(userData.toString());
	}else{
		console.log("[*] Console not connected");
	}
});
console.log("[+] Cluster WebSocket Console [ONLINE]....");
