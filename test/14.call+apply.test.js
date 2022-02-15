const { success, fail } = require("./utils");

const testName = `手写call和apply方法`;

module.exports = () => {
    // global.name = 'Jim';
    function a(age, address) { return this.name + age + address }
    // a(20);

    const result1 = a.myCall({ name: 'Tom' }, 20, 'Hangzhou');
    const result2 = a.myApply({ name: 'Tom' }, [20, 'Hangzhou']);

    if (result1 === 'Tom20Hangzhou' && result1 === result2) {
        success(testName);
    }
    else {
        fail(testName);
    }
}
