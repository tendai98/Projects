let ShellEnvironment = { ShellArgs: [], ShellHistory: {}, LastCommand: [] };
let shellSTDIO = null;
let CommandIndex = 0;
const SHELL_PROMPT = "\nCluster://> ";

const writeConsole = (data) => {
    shellSTDIO.send(data);
}

function ClusterShellInterface(baseUrl) {

    const MARKER = "CLUSTER-SHELL-UTIL";
    const PATH = "/bin/";
    let WebSock = null;

    let setShell = () => {
        sendEvent("[SHELL:RESET]", "shellArgs");
        sendEvent("[SHELL:STDOUT]", SHELL_PROMPT);
    };


    let shellParseArgs = (data) => {
        let tmp = data.split(" ");
        for (arg in tmp) {
            if (tmp[parseInt(arg)] !== "") {
                ShellEnvironment.ShellArgs.push(tmp[parseInt(arg)])
            }
        }
    };

    let shellReset = (mode) => {
        switch (mode) {
            case "shellEnv":
                ShellEnvironment = { ShellArgs: [], ShellHistory: {}, LastCommand: [] };
                CommandIndex = 0;
                break;

            case "shellArgs":
                ShellEnvironment.ShellArgs = [];
                break;

            default:
                break;
        }
    };

    let shellExecute = (codeData) => {
        if (codeData) {
            try {
                if (codeData.includes(MARKER)) {
                    FX = new Function(codeData);
                    ShellEnvironment.LastCommand = ShellEnvironment.ShellArgs;
                    ShellEnvironment.ShellHistory[CommandIndex] = ShellEnvironment.ShellArgs;
                    CommandIndex++;
                    FX.call();
                    setShell();
                } else {
                    console.error("[!] Program is not recognied");
                    throw Error("ERR_MARKER");
                }
            } catch (e) {
                console.log("[*] Exception -> " + e.toString());
                setShell();

            }
        } else {
            setShell();
        }
    };

    let loadExecute = () => {
        if (ShellEnvironment.ShellArgs[0]) {
            if (!ShellEnvironment.ShellArgs[0].includes(PATH)) {
                $.get(PATH + ShellEnvironment.ShellArgs[0], shellExecute);

            } else {
                $.get(ShellEnvironment.ShellArgs[0], shellExecute);

            }
        }
    };

    let loadProgram = (cmdData = "") => {
        if (cmdData.includes("$$")) {
            if (ShellEnvironment.LastCommand.length > 0) {
                ShellEnvironment.ShellArgs = ShellEnvironment.LastCommand;
                loadExecute();
            } else {
                writeConsole("[!] No command found");
                sendEvent("[SHELL:STDOUT]", SHELL_PROMPT);
            }

        } else if (cmdData.includes("!")) {
            if (CommandIndex > 0) {
                try {
                    let cmdIndex = parseInt(cmdData.replace("!", ""));
                    ShellEnvironment.ShellArgs = ShellEnvironment.ShellHistory[cmdIndex];
                    loadExecute();

                } catch (e) {
                    writeConsole("Invalid command index");
                    sendEvent("[SHELL:STDOUT]", SHELL_PROMPT);
                }
            } else {
                writeConsole("[!] No Command history available");
                sendEvent("[SHELL:STDOUT]", SHELL_PROMPT);
            }
        } else if (cmdData === "reset") {
            sendEvent("[SHELL:STDOUT]", SHELL_PROMPT);
            sendEvent("[SHELL:RESET]", "shellEnv");
        } else {
            shellParseArgs(cmdData);
            loadExecute();
        }
    };

    let connect = (url) => {
        WebSock = new WebSocket(url);

        WebSock.onopen = () => {
            shellSTDIO = WebSock;
            attachEventHandler("[SHELL:STDOUT]", writeConsole);
        };

        WebSock.onmessage = (dataBlob) => {
            if (dataBlob.data !== "\n") {
                sendEvent("[SHELL:DATA]", dataBlob.data.replace("\n", ""));
            } else {
                sendEvent("[SHELL:STDOUT]", SHELL_PROMPT);
                sendEvent("[SHELL:RESET]", "shellEnv");
            }
        }
        WebSock.onclose = () => { connect(baseUrl); }
    };

    connect(baseUrl);
    attachEventHandler("[SHELL:DATA]", loadProgram);
    attachEventHandler("[SHELL:RESET]", shellReset);

}