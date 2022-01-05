const PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED";

const resolvePromise = (promise2, x, resolve, reject) => {
    if (promise2 === x) {
        return reject(new TypeError("错误"));
    }

    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        let called = false;
        try {
            const then = x.then;

            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    // resolve(y);
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    if (called) return;
                    called = true;
                    reject(r);
                })
            }
            else {
                resolve(x);
            }

        } catch (e) {
            if (called) return;
            called = true;
            reject(e);
        }
    }
    else {
        resolve(x);
    }
}

class Promise {

    constructor(executor) {
        this.state = PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state === PENDING) {
                this.value = value;
                this.state = FULFILLED;
                this.onFulfilledCallbacks.forEach(fn => fn());
            }
        };

        const reject = (reason) => {
            if (this.state === PENDING) {
                this.reason = reason;
                this.state = REJECTED;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e };

        const promise2 = new Promise((resolve, reject) => {

            if (this.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
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
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }

            if (this.state === PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
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
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
            }

        });

        return promise2;
    }

    static resolve(value) {
        return new Promise((resolve, reject) => {
            resolve(value);
        })
    }

    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            const result = [];
            let count = 0;
            const processResolve = (value, index) => {
                result[index] = value;
                if (++count === result.length) {
                    resolve(result);
                }
            }

            promises.forEach((p, index) => {
                if (p && typeof p.then === 'function') {
                    p.then(data => {
                        processResolve(data, index);
                    }, reject);
                }
                else {
                    processResolve(p, index);
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
            })
        })
    }

    catch(errHandler) {
        return this.then(null, errHandler);
    }

    finally(cb) {
        return this.then(data => {
            return Promise.resolve(cb()).then(() => data);
        }, err => {
            return Promise.resolve(cb()).then(() => { throw err });
        })
    }

}

module.exports = Promise;