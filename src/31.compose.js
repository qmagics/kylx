const compose = (...fns) => {
    if (fns.length === 0) {
        return (...args) => args
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return fns.reduce((pre, cur) => (...args) => cur(pre(...args)));
}

function composeAsync(...args) {
    if (args.length === 0) {
        return (...args) => args;
    }
    if (args.length === 1) {
        return args[0];
    }

    // 拿出一个先执行
    const init = args.pop();
    return function (...args2) {
        return args.reduceRight((pre, cur) => {
            return pre.then(data => {
                return cur(data);
            })
        }, Promise.resolve(init(...args2)));
    }
}

module.exports = compose;



/**
 * 顺序执行Promise
 * @param {*} promiseArray promise队列
 * @param {*} initialValue 初始resolve值
 */
export const runPromiseInsequence = async (promiseArray, initialValue) => {
    await promiseArray.reduce((pre, cur) => pre.then(cur), Promise.resolve(initialValue));
}