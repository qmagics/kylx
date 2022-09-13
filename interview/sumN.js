// 从数组中取出 n 个和为 m 的数组

/**
 * 决策树-递归
 * @param {*} A 数组
 * @param {*} n 多少个
 * @param {*} m 和
 * @param {*} i 第几次决策
 * @param {*} decisions 决策结果
 * @returns {*} 决策结果
 */
function sumN(A, n, m, i = 0, decisions = []) {

    if (m === 0 && n === 0) return decisions;

    if (i === A.length || n === 0 || m < 0) return null;

    return sumN(A, n - 1, m - A[i], i + 1, decisions.concat(A[i])) || sumN(A, n, m, i + 1, decisions);
}

console.log((sumN([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6)));

// 