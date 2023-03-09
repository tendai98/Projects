function GPUKernelCore(busUrl) {

    let kernelOutput = {};
    let socket = null;
    let NODE = new Date().getTime().toString();

    const NODE_ID = NODE + ":[GPU]";

    let recvKernelData = (outputData) => {
        kernelOutput[outputData.kernelID] = outputData.data;
        let MSG = { type: "MSG", msg: "[NODE_ID] " + NODE_ID + " :: [Task Execution Complete]" };
        sendEvent("[BUS:REQ]", MSG);
    };
    let callBus = (data) => { socket.send(JSON.stringify(data)); };

    let recvData = (Data) => {
        try {
            let kernelInfo = JSON.parse(Data);
            switch (kernelInfo.cmd) {
                case "[KERNEL:KILL]":
                    sendEvent("[KILL:KERNELS]");
                    break;

                case "[NODES:CONNECT]":
                    window.location.href = kernelInfo.url;
                    break;

                case "[RESET:BUFFERS]":
                    kernelOutput = {};
                    break;

                case "[GET:NODES]":
                    writeConsole("\n\t[ -->>>>>>>> [ GPU NODE INFORMATION ] <<<<<<<<<--]\n");
                    writeConsole("  \n  [ Node Index ]-   \t\t[ TimeID ]           \t\t[ NodeID ]\n");
                    writeConsole("  __________________________________________________________________________________\n")
                    let counter = 0;
                    for (let id in kernelInfo.data) {
                        writeConsole("  Node Index: " + counter + " - " + id + " -->>>  " + kernelInfo.data[id] + "\n");
                        counter++;
                    }
                    writeConsole(SHELL_PROMPT);
                    break;

                case "[KERNEL:INIT]":
                    sendEvent("[KERNEL:DISPTCH]", kernelInfo);
                    break;

                case "[DATA:DUMP]":
                    let DATA = { type: "DATA", KERNEL_DATA: kernelOutput, nodeID: NODE_ID };
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
        socket.onmessage = (Data) => { sendEvent("[KERNEL:DATA]", Data.data); };

        socket.onopen = () => {
            attachEventHandler("[KERNEL:DATA]", recvData);
            attachEventHandler("[BUS:REQ]", callBus);
            console.warn("[*] Connected to X-BUS (v1.0) ...");
            socket.send(JSON.stringify({ type: "PING", nodeID: NODE_ID }));
        };

        socket.onclose = connectToBus;
    };

    connectToBus();
    attachEventHandler("[RECV:DATA]", recvKernelData);
    const gpuDispacther = new GPUKernelDispatcherCore();
    attachEventHandler("[KILL:KERNELS]", gpuDispacther.resetSystem);
}