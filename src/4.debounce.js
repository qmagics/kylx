// 防抖
function debounce(fn, wait, immediate) {
    let timer = undefined;

    return function () {
        clearTimeout(timer);

        if (immediate && !timer) {
            fn.call(this, arguments);
        }

        timer = setTimeout(() => {
            fn.call(this, arguments);
        }, wait);
    }
}