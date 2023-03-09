function GPUKernelDispatcherCore() {

    let kernels = {};
    let kernelAttrData = {};

    let KERNEL_EVENT_CORE = new EventEmitter();
    const GPU_CORE = new GPU({ mode: 'gpu' });

    let getKernelId = () => {
        let timeId = new Date().getTime().toString()
        let kernelId = timeId + ":[KERNEL]";
        return kernelId;
    };

    let loadGPUKernel = (dataMap) => {
        $.getScript(kernelAttrData.programUrl, () => {

            for (let kernelIndex = kernelAttrData.startOffset; kernelIndex <= kernelAttrData.stopOffset; kernelIndex++) {

                if (dataMap[kernelIndex]) {
                    let newKernelId = getKernelId();
                    kernels[newKernelId] = GPU_CORE.createKernel(KERNEL_FX, dataMap["outputConfig"]);

                    KERNEL_EVENT_CORE.addListener("[KERNEL:EXEC]", () => {
                        const dataIndex = kernelIndex;
                        const ID = newKernelId;
                        let Data = kernels[ID](dataMap[dataIndex]);
                        sendEvent("[RECV:DATA]", { data: Data, kernelID: ID });
                    });

                } else {
                    console.warn("[X-GPU] :: [KERNEL DATA OVERLOAD]");
                    break;
                }
            }

            KERNEL_EVENT_CORE.emit("[KERNEL:EXEC]");
        });
    };

    this.resetSystem = () => {
        for (let kernelIDvalue in kernels) {
            kernels[kernelIDvalue].destroy();
        }
        kernels = {};
        KERNEL_EVENT_CORE = new EventEmitter();
    }

    let kernelDispatcher = (kernelAttr) => {
        kernelAttrData = kernelAttr;
        $.get(kernelAttr.dataMapUrl, loadGPUKernel);
    };

    attachEventHandler("[KERNEL:DISPTCH]", kernelDispatcher);

}