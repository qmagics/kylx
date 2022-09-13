// 每次可以爬 1或2级， 求爬n级楼梯的方法有几种
function steps(n) {
    let a = b = 1;

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}



function stepsn(n) {
    let arr = [1, 1];

    for (let i = 2; i <= n; i++) {
        arr[i] = arr.reduce((a, b) => a + b);
    }

    return arr.pop();
}

console.log(stepsn(12));