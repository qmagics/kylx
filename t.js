// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//     const arr = [0, 1, 2];

//     for (let i = 3; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }

//     return arr[n];
// };

// console.log(climbStairs(3));

const log = v => console.log(v);

const double = v => v * 2;

const addHeader = (header = 'header') => v => `${header}:${v}`;

const repeat = n => v => {
    let str = '';
    [...Array(n)].forEach(() => {
        str += v;
    });

    return str;
}

const compose = fns => {
    if (fns.length === 0) return v => v;
    if (fns.length === 1) return fns[0];

    return fns.reduce((pre, cur) => {
        return (...args) => pre(cur(...args));
    });
}

const say = compose([log, repeat(3), addHeader('http://'), double]);

say(3);