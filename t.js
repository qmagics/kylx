/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const arr = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + 1;
    }

    return arr[n];
};

console.log(climbStairs(4));