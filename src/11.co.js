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