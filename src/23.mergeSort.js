function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) return arr;

    const middle = Math.floor(len / 2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    const arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }

    while (left.length) arr.push(left.shift());

    while (right.length) arr.push(right.shift());

    return arr;
}

console.log(mergeSort([7, 2, 1, 0, 4, 3, 5, 6]))
