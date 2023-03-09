#!/usr/bin/nodejs

const ADDR_INFO = { port: 9091 };
const WebSocketServer = require("ws");
const FileSystem = require("fs");
const Server = new WebSocketServer.Server(ADDR_INFO);

let debug = false;

let counter = 0;
let NodeConnectionRegister = {};
let ActiveNodes = {};
let NodeIDs = []
let NodeData = {}
console.log("[+] [X-BUS]::[ONLINE] -> 0.0.0.0:" + ADDR_INFO["port"]);

if (process.argv[2] === "--enable-debug") {
    console.log("[*] Thread Debug Messaging Enabled....");
    debug = true;
}

Server.on("connection", (ev) => {
    ev.on("message", (data) => {
        try {
            let time = new Date().toString().substring(16, 24);
            let timeID = new Date().getTime().toString() + "[ " + time + " ]";
            NodeInfo = JSON.parse(data);
            const NODE_ID = NodeInfo.nodeID;
            switch (NodeInfo.type) {
                case "PING":
                    ActiveNodes[NodeInfo.nodeID] = ev;

                    ev.on("close", () => {
                        for (let id in NodeConnectionRegister) {
                            if (NodeConnectionRegister[id] === NODE_ID) {
                                delete ActiveNodes[NODE_ID];
                                delete NodeConnectionRegister[id];
                                console.log("[Processor Node: -> ID [ " + NODE_ID + " ]::[DISCONNECTED]");
                            }
                        }

                    });

                    NodeConnectionRegister[new Date().getTime().toString() + timeID] = NodeInfo.nodeID;
                    NodeIDs.push(NodeInfo.nodeID);
                    console.log("[Processor Node: -> ID [ " + NodeInfo.nodeID + " ]::[CONNECTED]");
                    break;

                case "MSG":
                    if (NodeInfo.msg != undefined && debug) {
                        console.log(NodeInfo.msg + " -> " + counter);
                        counter++;
                    }
                    break;

                case "CMD":
                    for (let node in ActiveNodes) {
                        ActiveNodes[node].send(JSON.stringify(NodeInfo.subData));
                        if (NodeInfo.subData.cmd === "[RESET:BUFFERS]") {
                            NodeData = {};
                            counter = 0;
                            console.log("[*] [X-BUS] [BUFFER RESET]....");
                        }
                    }
                    console.log("[*] Node COMMAND Broadcast !!!");
                    break;

                case "GET-NODES":
                    for (let node in ActiveNodes) {
                        let NodeStats = { cmd: "[GET:NODES]", data: NodeConnectionRegister };
                        ActiveNodes[node].send(JSON.stringify(NodeStats));
                    }
                    break;

                case "DATA":
                    if (ActiveNodes.hasOwnProperty(NodeInfo.nodeID)) {
                        if (Object.keys(NodeInfo.THREAD_DATA).length > 0) {
                            NodeData[NodeInfo.nodeID] = NodeInfo.THREAD_DATA;
                            console.log("[+] PROCESSOR_NODE [ID]::" + NodeInfo.nodeID + " [DATA_DUMP]::[OK]");
                        } else {
                            console.log("[-] [X-BUS] :: [ERROR] - No Data");
                        }
                    }
                    break;

                case "DUMP":
                    if (Object.keys(NodeData).length > 0 && NodeData != undefined) {
                        FileSystem.writeFile(NodeInfo.path, JSON.stringify(NodeData), (err) => {
                            if (err) {
                                console.log("[-] Error on [DATA_DUMP] -> " + err.message);
                            } else { console.log("[*] [X-BUS]:: [FILE_DUMP REQUEST]"); }
                        });

                    } else {
                        console.log("[-] [X-BUS] [DUMP] :: [No Data]");
                    }
                    break;
                case "APPEND":
                    if (Object.keys(NodeData).length > 0 && NodeData != undefined) {
                        FileSystem.writeFile(NodeInfo.path, JSON.stringify(NodeInfo.data), { flag: "a+" }, (err) => {
                            if (err) {
                                console.log("[-] Error on [DATA_DUMP] -> " + err.message);
                            } else { console.log("[*] [X-BUS]:: [APPEND_DUMP REQUEST]"); }
                        });

                    } else {
                        console.log("[-] [X-BUS] [APPEND] :: [No Data]");
                    }
                    break;

                case "THREAD":
                    let index = 0;
                    let dataOffset = 0;
                    let endOffset = NodeInfo.threadCount - 1;
                    if (NodeInfo.threadCount != 0) {
                        for (let index in ActiveNodes) {
                            NodeInfo.subData.startOffset = dataOffset;
                            NodeInfo.subData.stopOffset = endOffset;
                            ActiveNodes[index].send(JSON.stringify(NodeInfo.subData));
                            dataOffset += NodeInfo.threadCount;
                            endOffset += NodeInfo.threadCount;
                            console.log("[*] Deploying on [CPU Node]::" + (index));
                            index++;
                        }

                    } else {
                        console.log("[x] Invalid Thread Count :: [ERR_THREAD_COUNT]");
                    }
                    break;

                default:
                    console.log("[x] Bus Command not implemented ");
                    break;
            }

        } catch (e) {
            console.log("[*] Error :-> " + e.toString());
        }
    });

});