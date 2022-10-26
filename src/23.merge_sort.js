const { sortMethodSpeedTest } = require("./9999.utils");

/**
 * 合并数组的两个有序区块
 * @param {*} A 数组
 * @param {*} p 第一个区块开始[
 * @param {*} q 第一个区块结束) 第二个区块开始[
 * @param {*} r 第二个区块结束)
 */
function merge(A, p, q, r) {
    const A1 = A.slice(p, q);
    const A2 = A.slice(q, r);
    A1.push(Infinity);
    A2.push(Infinity);

    for (let k = p, i = j = 0; k < r; k++) {
        A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++];
    }
}

/**
 * 归并排序
 * @param {*} A 数组
 * @param {*} p 要排序部分的开始，默认为0
 * @param {*} r 要排序部分的结束，默认为A.length
 */
function merge_sort(A, p = 0, r = A.length) {
    if (r - p < 2) return;

    const mid = Math.ceil((p + r) / 2);

    merge_sort(A, p, mid);
    merge_sort(A, mid, r);

    merge(A, p, mid, r);
}

const arr = [5, 3, 2, 1, 4];
merge_sort(arr);
console.log(arr);

// const arr = [9, 3, 5, 7, 2, 23, 35, 35, 6, 12, 57, 59, 236, 6, 679, 347, 45, 236, 4367, 48, -236, -4, -546, 646, 35, 3458, 468];
// sortMethodSpeedTest(merge_sort, 100000);