const { success, fail } = require("./utils");

const testName = `函数柯里化方法 - 递归内层函数版本`;

module.exports = (curry) => {
    const sum = (a, b, c) => a + b + c;

    const add = curry(sum);
    const n1 = add(1)(2)(3)
    const n2 = add(1, 2, 3)
    const n3 = add(1, 2)(3)
    const n4 = add(1)(2, 3)

    if (n1 === 6 && n2 === 6 && n3 === 6 && n4 === 6) {
        success(testName)
    }
    else {
        fail(testName)
    }
}