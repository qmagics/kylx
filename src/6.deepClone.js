// 深拷贝
function deepClone(obj, hashMap = new WeakMap()) {
    // 排除null和undefined
    if (obj == null) return obj;

    // 排除非真正意义的对象
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== 'object') return obj;

    // 如果拷贝过，就直接返回（处理循环引用）
    if (hashMap.has(obj)) return hashMap.get(obj);

    // 剩下对象和数组
    const cloneObj = new obj.constructor();

    // 添加缓存
    hashMap.set(obj, cloneObj);

    // 循环递归拷贝属性
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hashMap);
        }
    }

    return cloneObj;
}

module.exports = deepClone;

