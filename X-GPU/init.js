const shellUrl = "ws://127.0.0.1:9092";
const busUrl = "ws://127.0.0.1:9094";
console.warn("[OK] LOADING X-GPU v1.0 (prototype)");

const gpuShell = new XGPUShellInterface(shellUrl);
const kernelCore = new GPUKernelCore(busUrl);