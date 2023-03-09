//ThreadingCore for slave nodes

function ThreadCore(busUrl) {

    let NODE = new Date().getTime().toString();
    const NODE_ID = NODE + ":[PROC]";
    const DISPATCHER_PATH = "/dispatch/";

    let threads = {};
    let socket = null;
    let threadData = {};

    let recvThreadData = (Data) => {
        threadData[Data.data.threadID] = Data.data.THREAD_DATA;
        let MSG = { type: "MSG", msg: "[NODE_ID] " + NODE_ID + " :: [Task Execution Complete]" };
        sendEvent("[BUS:REQ]", MSG);
    };

    let callBus = (data) => {
        socket.send(JSON.stringify(data));
    };

    let threadDispacther = (threadInfo) => {
        for (let index = threadInfo.startOffset; index <= threadInfo.stopOffset; index++) {
            let THREAD_ID = new Date().getTime().toString();
            THREAD_ID += ":[THREAD]";
            threads[THREAD_ID] = new Worker(threadInfo.programUrl);
            threads[THREAD_ID].onmessage = recvThreadData;

            $.get(threadInfo.dataMapUrl, (dataMap) => {

                let threadInputData = {};
                threadInputData.threadID = THREAD_ID;
                threadInputData.cmd = "[START]";
                threadInputData.data = dataMap[index];

                threads[THREAD_ID].postMessage(threadInputData);
            });

        }
    };

    let recvData = (Data) => {
        try {
            let threadInfo = JSON.parse(Data);
            switch (threadInfo.cmd) {
                case "[THREAD:KILL]":
                    for (let id in threads) {
                        threads[id].terminate();
                    }
                    break;

                case "[THREAD:INIT]":
                    sendEvent("[THREAD:DISPTCH]", threadInfo);
                    break;

                case "[NODES:CONNECT]":
                    window.location.href = threadInfo.url + DISPATCHER_PATH;
                    break;

                case "[RESET:BUFFERS]":
                    threadData = {};
                    break;

                case "[FLUSH:THREADS]":
                    threads = {};
                    break;

                case "[DATA:DUMP]":
                    let DATA = { type: "DATA", THREAD_DATA: threadData, nodeID: NODE_ID };
                    sendEvent("[BUS:REQ]", DATA);
                    break;

                default:
                    break;

            }
        } catch (e) {
            console.error("\n[ERROR] :-> " + e.toString());
        }
    };

    let connectToBus = () => {
        socket = new WebSocket(busUrl);
        socket.onmessage = (Data) => { sendEvent("[THREAD:DATA]", Data.data); };

        socket.onopen = () => {
            attachEventHandler("[THREAD:DATA]", recvData);
            attachEventHandler("[BUS:REQ]", callBus);
            console.warn("[*] Connected to X-BUS (v1.0) ...");
            socket.send(JSON.stringify({ type: "PING", nodeID: NODE_ID }));
        };

        socket.onclose = connectToBus;
    };

    connectToBus();
    attachEventHandler("[THREAD:DISPTCH]", threadDispacther);
}