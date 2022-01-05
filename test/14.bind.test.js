const { success, fail } = require("./utils");

const testName = `手写Bind方法`;

module.exports = () => {
    function fn(age = 0, sex = '') {
        return (this.name + age + sex);
    }

    const obj = {
        name: 'fxd'
    }
    const fn2 = fn.myBind(obj, 30);
    const result = fn2('男');

    if (result === 'fxd30男') {
        success(testName);
    }
    else {
        fail(testName);
    }
}