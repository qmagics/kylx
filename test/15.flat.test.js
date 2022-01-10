const { success, fail } = require("./utils");

const testName = `数组扁平化方法：flat`;

module.exports = () => {
    const a = [1, 2, [3, 4, [5, 6]], [[7, 8], [9, 10, [11, 12]]]];

    const a1 = a.myFlat(); // => [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ], [ 9, 10, [ 11, 12 ] ] ]
    const a2 = a.myFlat(2); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [ 11, 12 ] ]
    const a3 = a.myFlat(Infinity); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

    if (a1.length === 7 && a2.length === 11 && a3.length === 12) {
        success(testName);
    }
    else {
        fail(testName);
    }
}