function inherit(Sub, Super) {
    Sub.prototype = Object.create(Super.prototype, {
        constructor: {
            value: Sub,
            writable: true,
            configuarable: false,
        }
    })
}