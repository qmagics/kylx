module.exports = Array.prototype.myFlat = function (depth = 1) {
    let arr = [];

    this.forEach(i => {
        if (depth === 0 || !Array.isArray(i)) {
            return arr.push(i);
        }
        else {
            arr = [...arr, ...i.myFlat(depth - 1)]
        }
    })

    return arr;
}