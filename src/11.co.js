// generator + co = async/await
const co = (it) => {
    return new Promise((resolve, reject) => {
        const next = (data) => {
            const { value, done } = it.next(data);

            if (done) {
                resolve(value);
            }
            else {
                value.then(next, reject);
            }
        }

        next();
    });
}

function sleep(time, v) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(v) }, time);
    });
}

function* a() {
    const s1 = yield sleep(200, 1);
    const s2 = yield sleep(300, 2);
    const s3 = yield sleep(400, 3);

    return s1 + s2 + s3;
}

co(a()).then(s => { console.log(s) });