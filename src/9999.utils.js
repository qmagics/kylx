exports.sortMethodSpeedTest = (method, count = 10000) => {
    const arr = [];

    for (let i = 0; i < count; i++) {
        arr.push((Math.random() * 100).toFixed(0));
    }

    const start = new Date().getTime();

    method(arr);

    const end = new Date().getTime();
    console.log(`[${method.name}]${count}条-用时:` + (end - start) + 'ms');
}