/** 递归内层函数版本 */
const curry = (fn) => {
    const inner = (...args) => {
        if (fn.length > args.length) {
            return (...args2) => inner(...args, ...args2)
        }
        else {
            return fn(...args);
        }
    };

    return inner();
}

module.exports = curry;