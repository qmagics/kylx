function debounce(fn, wait, options = {}) {
    const leading = options.leading ?? true;
    const trailing = options.trailing ?? true;
    const maxing = 'maxWait' in options;
    const maxWait = options.maxWait;

    let lastThis = undefined;
    let lastArgs = undefined;
    let lastCallTime = undefined;
    let lastInvokeTime = 0;
    let timerId = undefined;

    const shouldInvoke = function (time) {
        return lastCallTime === undefined
            || time - lastCallTime > wait
            || time - lastInvokeTime > maxWait
    }

    const startTimer = function (timerFn, wait) {
        timerId = setTimeout(timerFn, wait);
    }

    const invokeFn = function (time) {
        lastInvokeTime = time;
        fn.apply(lastThis, lastArgs);
    }

    const getRemainingWait = function (time) {
        return wait - (time - lastCallTime);
    }

    const trailingEdge = function (time) {
        timerId = undefined;

        if (trailing) {
            invokeFn(time);
        }
    }

    const timerFn = function () {
        const time = Date.now();

        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }

        startTimer(timerFn, getRemainingWait(time));
    }

    const leadingEdge = function (time) {
        lastInvokeTime = time;

        if (leading) {
            invokeFn(time);
        }

        startTimer(timerFn, wait);
    }

    const debounced = function (...args) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);
        lastThis = this;
        lastArgs = args;
        lastCallTime = time;

        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(time);
            }
        }

        if (timerId === undefined) {
            startTimer(timerFn, wait);
        }
    }

    return debounced;

}

function throttle(fn, wait, options = {}) {
    return debounce(fn, wait, {
        ...options,
        maxWait: wait
    })
}