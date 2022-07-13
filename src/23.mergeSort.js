const { sortMethodSpeedTest } = require("./9999.utils");

function mergeSort(arr) {
    const len = arr.length;
    if (len === 1) {
        return arr;
    }

    let middle = Math.floor(len / 2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle, len);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }

    while (left.length) {
        arr.push(left.shift())
    }

    while (right.length) {
        arr.push(right.shift())
    }

    return arr;
}

sortMethodSpeedTest(mergeSort);