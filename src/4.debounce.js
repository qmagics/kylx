function debounce(fn, wait, immediate = true) {
    let timer = undefined;

    return function () {
        if (immediate && !timer) {
            fn.apply(this, arguments);
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    }
}