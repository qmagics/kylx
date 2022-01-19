function debounce(fn, wait, immediate) {
    let timer = undefined;

    return function () {
        clearTimeout(timer);

        if (timer === undefined && immediate) {
            fn.apply(this, arguments);
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait)
    }
}