class ProxySandbox {
    constructor() {
        const rawWindow = window;
        const fakeWindow = {};

        this.proxy = new Proxy(fakeWindow, {
            get(target, p) {
                return target[p] || rawWindow[p];
            },
            set(target, p, value) {
                target[p] = value;
                return true;
            }
        });
    }
}

const sandbox1 = new ProxySandbox();
const sandbox2 = new ProxySandbox();

window.a = 1;

((window) => {
    window.a = 2;
})(sandbox1.proxy);

((window) => {
    window.a = 3;
})(sandbox1.proxy);
