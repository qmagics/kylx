const fetch = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url);
            console.log(url);
        }, 2000);
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
            return Promise.resolve().then(() => request());
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