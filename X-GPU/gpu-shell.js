#!/usr/bin/nodejs

const BANNER = "etc/motd";
const WebSocketServer = require("ws");
const fs = require('fs');
const stdout = process.stdout;
const stdin = process.stdin;
const ADDR_INFO = { port: 9092 };
const Server = new WebSocketServer.Server(ADDR_INFO);

let Connect = null;
let data = fs.readFileSync(BANNER);
console.log(data.toString());
Server.on("connection", (evX) => {
    Connect = evX;
    evX.on("message", (data) => {
        stdout.write(data);
    });

    evX.on("close", (data) => {
        Connect = null;
        console.log("[!] Console disconnected");
    });
});

stdin.on("data", (userData) => {
    if (Connect) {
        Connect.send(userData.toString());
    } else {
        console.log("[!] Console is not connected");
    }
});
console.log("[+] X-GPU WebSocket Console [ONLINE]....");