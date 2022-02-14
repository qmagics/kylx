function toTree(data, options = {}) {
    const idField = options.idField ?? 'id';
    const pidField = options.pidField ?? 'pid';
    const childrenField = options.childrenField ?? 'children';

    const arr = [];

    const map = data.reduce((map, cur) => {
        cur[childrenField] = [];
        map[cur[idField]] = cur;
        return map;
    }, {});


    data.forEach(i => {
        const parent = map[i[pidField]];

        if (parent) {
            parent[childrenField].push(i);
        }
        else {
            arr.push(i);
        }
    });

    return arr;
}

module.exports = toTree;