/** 递归内层函数版本 */
const curry = (fn) => {
    const inner = (...args) => fn.length > args.length ? (...args2) => inner(...args, ...args2) : fn(...args);

    return inner();
}

module.exports = curry;