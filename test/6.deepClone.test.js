const { success, fail } = require("./utils");

const testName = `深拷贝方法：deepClone`;

module.exports = (deepClone) => {
    const o1 = { name: 'a', age: 1 }
    const c1 = deepClone(o1);
    const flag1 = c1.name === 'a' && c1.age === 1;

    const o2 = new Date();
    const c2 = deepClone(o2);
    const flag2 = (c2 instanceof Date) && c2 !== o2;

    const o3 = [1, '2', new Date(), /\d/, { name: 'A' }];
    const c3 = deepClone(o3);
    const flag3 = JSON.stringify(o3) === JSON.stringify(c3) && (c3[3] instanceof RegExp) && c3[4].name === 'A';

    if (flag1 && flag2 && flag3) {
        success(testName);
    }
    else {
        fail(testName);
    }
}