class EventEmitter {

    constructor() {
        this._eventMap = {};
    }

    on(eventName, handler) {
        const handlers = this._eventMap[eventName] || (this._eventMap[eventName] = []);

        handlers.push(handler);
    }

    off(eventName, handler) {
        const handlers = this._eventMap[eventName];
        if (handlers?.length) {
            this._eventMap[eventName] = handlers.filter(i => i !== handler && i._rawFn !== handler);
        }
    }

    once(eventName, handler) {
        const one = () => {
            handler();
            this.off(eventName, one);
        }
        one._rawFn = handler;
        this.on(eventName, one);
    }

    emit(eventName, ...args) {
        const handlers = this._eventMap[eventName];

        (handlers || []).forEach(handler => handler(...args));
    }
}

module.exports = EventEmitter;