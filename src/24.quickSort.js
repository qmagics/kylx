function quickSort(arr, left, right) {
    const len = arr.length;
    left = typeof left === 'number' ? left : 0;
    right = typeof right === 'number' ? right : len - 1;

    if (left < right) {
        const partitionIndex = partition(arr, left, right);

        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }

    return arr;
}

function partition(arr, left, right) {
    const pivot = left;
    let index = pivot + 1;

    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, index, i);
            index++;
        }
    }

    swap(arr, index - 1, pivot);

    return index - 1;
}

function swap(arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

console.log(quickSort([7, 2, 1, 0, 4, 3, 5, 6]))