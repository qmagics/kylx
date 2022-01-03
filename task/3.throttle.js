function throttle(fn, wait) {
    let preTime = 0;

    return function () {
        const now = Date.now();

        if (now - preTime >= wait) {
            fn.apply(this, arguments);
            preTime = now;
        }
    }
}

module.exports = throttle;