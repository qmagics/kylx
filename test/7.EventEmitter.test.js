const { success, fail } = require("./utils");

const testName = `发布订阅模式：EventEmitter`;

module.exports = (EventEmitter) => {
    class Girl extends EventEmitter {
        constructor(name) {
            super();
            this.name = name;
        }
    }
    const girl = new Girl("莫妮卡");


    const RESULT = {
        cry: 0,
        drink: 0,
        buy: 0
    }

    const cry = (reason) => {
        // console.log(`呜呜呜...${reason}`);
        RESULT.cry++;
    }
    const drink = () => {
        // console.log('咕噜咕噜咕噜...我只喝一次酒')
        RESULT.drink++;
    }

    const buy = (count) => {
        // console.log("买买买~");
        RESULT.buy += count;
    }


    girl.on("失恋", cry);
    girl.once("失恋", drink);
    girl.on("逛街", buy);

    // 触发
    girl.emit("失恋", "被抛弃了");
    girl.emit("失恋", "被抛弃了");
    girl.off("失恋", cry);
    girl.emit("失恋", "被抛弃了");
    girl.emit("逛街", 2);


    // 校验次数
    if (RESULT.cry === 2 && RESULT.drink === 1 && RESULT.buy === 2) {
        success(testName)
    }
    else {
        fail(testName)
    }
}