class SnapshotSandbox {
    constructor() {
        this.proxy = window;

        this.modifyPropsMap = {};

        this.active();
    }

    active() {

        // 存快照
        this.windowSnapShot = {};
        for (const prop in window) {
            if (window.hasOwnProperty(prop)) {
                this.windowSnapShot[prop] = window[prop];
            }
        }

        // 从变更属性映射表中还原
        Object.keys(this.modifyPropsMap).forEach(prop => {
            window[prop] = this.modifyPropsMap[prop];
        })
    }

    inactive() {
        for (const prop in window) {
            if (window.hasOwnProperty(prop)) {
                if (window[prop] !== this.windowSnapShot[prop]) {
                    // 更新变更属性映射表
                    this.modifyPropsMap[prop] = window[prop];

                    // 还原window属性
                    window[prop] = this.windowSnapShot[prop];
                }
            }
        }
    }
}

const sandbox = new SnapshotSandbox();

((window) => {
    window.a = 1;
    window.b = 2;

    console.log(window.a, window.b);
    sandbox.inactive();
    console.log(window.a, window.b);
    sandbox.active();
    console.log(window.a, window.b);
})(sandbox.proxy);