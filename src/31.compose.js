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