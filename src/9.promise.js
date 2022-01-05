const REJECTED = "REJECTED";
const FULFILLED = "FULFILLED";
const PENDING = "PENDING";

// 利用x的值来判断是调用promise2的resolve还是reject
const resolvePromise = (promise2, x, resolve, reject) => {

    // 如果promise2和x是同一个对象，抛一个类型错误
    if (promise2 === x) {
        return reject(new TypeError("错误"));
    }

    // 比人的Promise可能成功后还能失败


    // x可能是一个promise（我写的Promise可能要和别人的Promise实现兼容）
    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        let called = false;
        try {
            let then = x.then;

            if (typeof then === 'function') { //到这里就认为x是个promise了
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    // resolve(y);
                    resolvePromise(promise2, y, resolve, reject);
                }, r => {
                    if (called) return;
                    called = true;
                    reject(r);
                });
            }
            else { //普通对象包含then属性而已
                resolve(x);
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e);
        }
    }
    // 普通值
    else {
        resolve(x);
    }

}

class Promise {

    constructor(executor) {

        this.state = PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (value instanceof Promise) {
                return value.then(resolve, reject);
            }
            if (this.state === PENDING) {
                this.value = value;
                this.state = FULFILLED;

                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }

        const reject = (reason) => {
            if (this.state === PENDING) {
                this.reason = reason;
                this.state = REJECTED;

                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onFulfilled, onRejected) {
        // 默认值穿透
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e };

        const promise2 = new Promise((resolve, reject) => {
            if (this.state === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    // 使用setTimeout确保这里能拿到promise2实例
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            // resolve(x);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });

                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            // resolve(x);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
            }

            if (this.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        // resolve(x);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }

            if (this.state === REJECTED) {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        // resolve(x);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }
        })

        return promise2;
    }

    catch(errorFn) {
        return this.then(null, errorFn);
    }

    finally(cb) {
        return this.then(data => {
            return Promise.resolve(cb()).then(() => data);
        }, (e) => {
            return Promise.resolve(cb()).then(() => { throw e })
        })
    }

    static resolve(value) {
        return new Promise((resolve, reject) => {
            resolve(value);
        })
    }

    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            const result = [];
            let n = 0, len = promises.length;

            const handlePromise = (p, i) => {
                result[i] = p;
                if (++n === len) {
                    resolve(result);
                }
            };

            promises.forEach((p, i) => {
                if (p && typeof p.then === 'function') {
                    p.then((data) => {
                        handlePromise(data, i);
                    }, reject)
                }
                else {
                    handlePromise(p, i);
                }
            })
        })
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach(p => {
                if (p && typeof p.then === 'function') {
                    p.then(resolve, reject);
                }
                else {
                    resolve(p);
                }
            });
        });
    }
}

module.exports = Promise;