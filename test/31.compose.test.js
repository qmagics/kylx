const { success, fail } = require("./utils");

const testName = `组合函数：compose`;

module.exports = (compose) => {
    function a(s) {
        return s + 'A';
    }

    function b(s) {
        return s + 'B';
    }

    const c = compose(b, a);

    const result = c('C');

    if (result === 'CBA') {
        success(testName);
    }
    else {
        fail(testName);
    }
}

