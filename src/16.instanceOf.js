function instanceOf(left, right) {
    const prototype = right.prototype;
    let __proto__ = Object.getPrototypeOf(left);

    while (true) {
        if (__proto__ === prototype) {
            return true;
        }
        else if ((__proto__ = Object.getPrototypeOf(__proto__)) === null) {
            return false;
        }
    }
}

module.exports = instanceOf;