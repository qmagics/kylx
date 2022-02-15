Function.prototype.myCall = function (thisArg, ...args) {
    const ctx = thisArg || window;
    const key = Symbol('key');
    ctx[key] = this;

    const result = ctx[key](...args);
    delete ctx[key];

    return result;
}

Function.prototype.myApply = function (thisArg, argArr) {
    const ctx = thisArg || window;
    const key = Symbol('key');
    ctx[key] = this;

    const result = ctx[key](...argArr);
    delete ctx[key];

    return result;
}

module.exports = Function.prototype.myCall;