/** 递归自己版本 （支持调用curry的时候就传入fn的参数） */
const curry = (fn, ...args) => {
    if (fn.length > args.length) {
        return (...args2) => {
            return curry(fn, ...args, ...args2);
        }
    }
    else {
        return fn(...args);
    }
}

module.exports = curry;