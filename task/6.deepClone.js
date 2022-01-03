function deepClone(obj, hashMap = new WeakMap()) {
    if (obj == null) return obj;

    // 非狭义对象
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    // 普通类型
    if (typeof obj !== 'function') return obj;

    // 缓存中有，用缓存
    if (hashMap.has(obj)) return hashMap.get(obj);

    const cloneObj = new obj.constructor;
    hashMap.set(obj, cloneObj);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hashMap);
        }
    }

    return cloneObj;
}

module.exports = deepClone;