Function.prototype.myBind = function (thisArg, ...args) {
    const fn = this;
    return function (...args2) {
        return fn.call(thisArg, ...args, ...args2);
    }
}

Function.prototype.bindWithoutCall = function (thisArg, ...args) {
    const ctx = thisArg || window;
    const key = Symbol("key");
    ctx[key] = this;
    return function (...args2) {
        const result = ctx[key](...args, ...args2);
        delete ctx[key];
        return result;
    }
}

module.exports = Function.prototype.myBind;