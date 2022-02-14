const { success, fail } = require("./utils");

const testName = `选择排序：selectionSort`;

module.exports = (selectionSort) => {
    const arr = [5, 3, 4, 2, 6, 1];

    if (selectionSort(arr).toString() === '1,2,3,4,5,6') {
        success(testName);
    } else {
        fail(testName);
    };
}

