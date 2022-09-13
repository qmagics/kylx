// 动态规划

/**
 * 斐波那契数列求第n项
 * @param {*} n 
 */
function fib(n) {
    return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
}

// console.log(fib(41));

/**
 * 斐波那契数列求第n项 - 优化
 * @param {*} n 
 */

function fib2(n) {
    let pre = next = 1;

    for (let i = 2; i <= n; i++) {
        [pre, next] = [next, pre + next];
    }

    return next;
}

console.log([...Array(1000)].map((i, index) => fib2(index)));

// 1 1 2 3 5 8 13 21 34 55 89