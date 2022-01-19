const { success, fail } = require("./utils");

const testName = `冒泡排序：bubbleSort`;

module.exports = (bubbleSort) => {
    const arr = [5, 3, 4, 2, 6, 1];

    if (bubbleSort(arr).toString() === '1,2,3,4,5,6') {
        success(testName);
    } else {
        fail(testName);
    };
}

