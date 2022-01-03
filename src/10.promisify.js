const Promise = require("./9.promise")

const promisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            })
        })
    }
}

const promisifyAll = (obj) => {
    let newObj = {};

    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            newObj[key + 'Promise'] = promisify(obj[key]);
        }
    }

    return newObj;
}