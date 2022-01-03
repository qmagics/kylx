//  节流 + 防抖
// 上来后，先开一个定时器，只要一直点击，到时间就什么都不做，而是再开一个定时器
// 核心：如果函数高频触发，就一直开定时器，等待满足触发条件；然后通过配置项支持前置调用和后置调用
function debounce(fn, wait, options = {}) {
    // 第一次点击是否触发
    const leading = options.leading ?? true;
    // 最后次点击是否触发
    const trailing = options.trailing ?? true;
    // 是否开启maxing模式
    const maxing = 'maxWait' in options;
    // 最大等待时间（主要用于实现throttle效果）
    const maxWait = options.maxWait;


    // 上次执行的时间
    let lastCallTime;

    // 上次调用的时间
    let lastInvokeTime = 0;

    // 定时器对象
    let timer;

    let lastThis;
    let lastArgs;

    // 判断是否需要调用
    const shouldInvoke = function (time) {
        return lastCallTime === undefined
            || time - lastCallTime >= wait
            || (maxing && time - lastInvokeTime >= maxWait);
    }

    // 执行真正的方法
    const invokeFn = function (time) {
        lastInvokeTime = time;
        fn.apply(lastThis, lastArgs);
    }

    // 开启一个定时器
    const startTimer = function (timerFn, wait) {
        timer = setTimeout(timerFn, wait);
    }

    // 计算剩余时间
    const remainingWait = function (time) {
        return wait - (time - lastCallTime);
    }

    // 结束边缘处理
    const trailingEdge = function (time) {
        timer = undefined;
        if (trailing) {
            invokeFn(time)
        }
    }

    // 定时器执行函数
    const timerFn = function () {
        // 定时器时间到了，看看是否需要执行
        const time = Date.now();

        // 如果需要，执行并结束
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }

        // 否则再开一个定时器，接着等待...
        startTimer(timerFn, remainingWait(time));
    }

    // 开始边缘处理
    const leadingEdge = function (time) {
        lastInvokeTime = time;
        if (leading) {
            invokeFn(time);
        }
        startTimer(timerFn, wait);
    }

    // 返回的函数
    const debounced = function (...args) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);

        lastThis = this;
        lastArgs = args;
        lastCallTime = time;

        if (isInvoking) {
            // 第一次执行
            if (timer === undefined) {
                return leadingEdge(time);
            }
        }
        if (timer === undefined) {
            startTimer(timerFn, wait);
        }
    }

    return debounced;
}



// 节流
function throttle(fn, wait, options = {}) {
    return debounce(fn, wait, {
        ...options,
        maxWait: wait
    })
}

// exports.debounce = debounce;
// exports.throttle = throttle;