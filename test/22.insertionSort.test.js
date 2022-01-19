const { success, fail } = require("./utils");

const testName = `插入排序：insertionSort`;

module.exports = (insertionSort) => {
    const arr = [5, 3, 4, 2, 6, 1];

    if (insertionSort(arr).toString() === '1,2,3,4,5,6') {
        success(testName);
    } else {
        fail(testName);
    };
}

