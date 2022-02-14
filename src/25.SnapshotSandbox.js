class SnapshotSandbox {
    constructor() {
        this.proxy = window;

        this.modifyPropsMap = {};

        this.active();
    }

    active() {
        // 保存此时的window属性快照
        this.windowSnapshot = Object.keys(window).reduce((memo, cur) => { memo[cur] = window[cur]; return memo }, {});
        
        // 将属性变更表中的属性恢复到window上
        Object.keys(this.modifyPropsMap).forEach(key => {
            window[key] = this.modifyPropsMap[key];
        });
    }

    inactive() {
        // 更新属性表更表，并将window还原至快照时的样子
        Object.keys(window).forEach(key => {
            if (window[key] !== this.windowSnapshot[key]) {
                this.modifyPropsMap[key] = window[key];
                window[key] = this.windowSnapshot[key];
            }
        })
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