Function.prototype.myBind = function (thisArg, ...args) {
    const fn = this;
    return function (...args2) {
        return fn.call(thisArg, ...args, ...args2);
    }
}

module.exports = Function.prototype.myBind;