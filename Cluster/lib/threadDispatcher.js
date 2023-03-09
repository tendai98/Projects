//ThreadCore for master node

function ThreadCore(busUrl) {

    let NODE = new Date().getTime().toString();
    let socket = null;

    const NODE_ID = NODE + ":[PROC]";
    let threads = {};
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

                case "[NODES:CONNECT]":
                    window.location.href = threadInfo.url;
                    break;

                case "[RESET:BUFFERS]":
                    threadData = {};
                    break;

                case "[FLUSH:THREADS]":
                    threads = {};
                    break;

                case "[GET:NODES]":
                    writeConsole("\n\t[ -->>>>>>>> [ PROCESSOR NODE INFORMATION ] <<<<<<<<<--]\n");
                    writeConsole("  \n  [ Node Index ]-   \t\t[ TimeID ]           \t\t[ NodeID ]\n");
                    writeConsole("  __________________________________________________________________________________\n")
                    let counter = 0;
                    for (let id in threadInfo.data) {
                        writeConsole("  Node Index: " + counter + " - " + id + " -->>>  " + threadInfo.data[id] + "\n");
                        counter++;
                    }
                    writeConsole(SHELL_PROMPT);
                    break;

                case "[THREAD:INIT]":
                    sendEvent("[THREAD:DISPTCH]", threadInfo);
                    break;

                case "[DATA:DUMP]":
                    let DATA = { type: "DATA", THREAD_DATA: threadData, nodeID: NODE_ID };
                    sendEvent("[BUS:REQ]", DATA);
                    break;

                default:
                    console.error("[X] Invalid Command");
                    break;

            }
        } catch (e) {
            console.error("[ERROR] :-> " + e.toString());
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