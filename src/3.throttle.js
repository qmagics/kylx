// 基础版
// function throttle(fn, wait) {
//     let preTime = 0;

//     return function () {
//         let now = Date.now();

//         let remain = wait - (now - preTime);

//         if (remain <= 0) {
//             fn.apply(this, arguments);
//             preTime = now;
//         }
//     }
// }

// // 后补一次
// function throttle(fn, wait) {
//     let preTime = 0;
//     let timer = undefined;

//     return function () {
//         clearTimeout(timer);

//         let now = Date.now();

//         let remain = wait - (now - preTime);

//         if (remain <= 0) {
//             fn.apply(this, arguments);
//             preTime = now;
//         }
//         else {
//             timer = setTimeout(() => {
//                 fn.apply(this, arguments);
//                 preTime = now;
//             }, remain);
//         }
//     }
// }

// underscore 版本
function throttle(fn, wait, options = { leading: true, trailing: true }) {
    let { leading, trailing } = options;
    let lastThis = undefined;
    let lastArgs = undefined;
    let timer = undefined;
    let preTime = 0;

    const later = () => {
        fn.apply(lastThis, lastArgs);
        preTime = Date.now();
    }

    const throttled = function () {

        lastThis = this;
        lastArgs = arguments;

        let now = Date.now();

        preTime = (leading === false && !preTime) ? now : preTime;

        let remain = wait - (now - preTime);

        if (remain <= 0) {
            if (timer) {
                clearTimeout(timer);
                timer = undefined;
            }
            fn.apply(lastThis, lastArgs);
            preTime = now;
        }
        else {
            if (!timer && trailing) {
                timer = setTimeout(later, remain);
            }
        }
    }

    return throttled;
}