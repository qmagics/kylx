const { sortMethodSpeedTest } = require("./9999.utils");

function partition(A, lo, hi) {
    let i = lo, j = hi - 1, pivot = A[hi - 1];

    while (i != j) {
        if (A[i] > pivot) {
            swap(A, i, --j);
        }
        else {
            i++;
        }
    }

    swap(A, i, hi - 1);

    return i;
}

function swap(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}

/**
 * 快速排序 [lo, hi)
 * @param {*} A 待排序数组 
 * @param {*} lo 排序区间开始
 * @param {*} hi 排序区间结束
 */
function quick_sort(A, lo = 0, hi = A.length) {
    if (hi - lo <= 1) return;

    const p = partition(A, lo, hi);
    quick_sort(A, lo, p);
    quick_sort(A, p + 1, hi);
}

// const a = [5, 3, 6, 2, 1, 4, 8, 7];
// quick_sort(a);
// console.log(a);

sortMethodSpeedTest(quick_sort, 10000);