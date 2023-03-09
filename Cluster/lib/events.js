let eventCore = new EventEmitter;

function sendEvent(eventName, Data) {
    if (Data) {
        eventCore.emit(eventName, Data);
    } else {
        eventCore.emit(eventName);
    }
}

function attachEventHandler(eventName, callback) {
    eventCore.addListener(eventName, callback);
    console.warn("[" + new Date().getTime().toString() + "]::[eventBus1.0] -> [NEW-EVENT] -> " + eventName);
}