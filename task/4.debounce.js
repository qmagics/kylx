/** 防抖 */
function debounce(fn, wait, immediate=true) {
    let timer = undefined;

    return function () {
        clearTimeout(timer);

        if (immediate) {
            if (timer === undefined) {
                fn.apply(this, arguments);
            }
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait)
    }
}

module.exports = debounce;