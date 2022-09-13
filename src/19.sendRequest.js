const fetch = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url);
            console.log(url);
        }, 500);
    })
}

function sendRequest(urlList, max, cb) {
    const pList = [];
    const len = urlList.length;
    let i = 0;

    const request = () => {
        if (i === len) {
            return Promise.resolve();
        }

        const p = fetch(urlList[i++]);
        p.then(() => { pList.splice(pList.indexOf(p), 1) });
        pList.push(p);

        if (pList.length < max) {
            // return Promise.resolve().then(() => request());
            return request();
        }
        else {
            return Promise.race(pList).then(() => request());
        }
    }

    return request()
        .then(() => Promise.all(pList))
        .then(() => cb());
}

const arr = [...Array(20)].map((i, index) => index);
sendRequest(arr, 2, data => {
    console.log('请求结束', data)
})








/**
 * 并发请求
 * @param {*} urlList 请求路径列表 
 * @param {*} max ajax请求的最大数量
 * @param {*} cb ajax全部请求结束后回调
 */
function sendRequest(urlList, max, cb) {
    const pList = [];
    const len = urlList.length;
    let i = 0;

    const request = () => {
        if (i === len) return Promise.resolve();

        const p = fetch(urlList[i++]);
        pList.push(p);
        p.then(() => pList.splice(pList.indexOf(p), 1));

        if (pList.length < max) {
            return request();
        }
        else {
            return Promise.race(pList).then(() => request());
        }
    }

    return request().then(() => Promise.all(pList)).then(cb);
}