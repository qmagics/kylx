import { inject } from 'vue';
const INJECTION_KEY = 'store';

class Store {
    constructor(options) {
    }

    get state() {
        return this._state.data;
    }

    install(app, injectionKey = INJECTION_KEY) {
        app.provide(injectionKey, this);
    }
}

const createStore = (options) => {
    return new Store(options);
}

const useStore = (injectionKey = INJECTION_KEY) => {
    return inject(injectionKey);
}

export {
    createStore,
    useStore
}