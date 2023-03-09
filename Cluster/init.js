const shellUrl = "ws://127.0.0.1:9090";
const busUrl = "ws://127.0.0.1:9091";
console.warn("[OK] LOADING Cluster v1.0 (prototype)")

const threadCore = new ThreadCore(busUrl);
const clusterShell = new ClusterShellInterface(shellUrl);