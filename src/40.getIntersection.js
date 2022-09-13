/**
 * 计算多个区间的交集
 *   区间用长度为2的数字数组表示，如[2, 5]表示区间2到5（包括2和5）；
 *   区间不限定方向，如[5, 2]等同于[2, 5]；
 *   实现`getIntersection 函数`
 *   可接收多个区间，并返回所有区间的交集（用区间表示），如空集用null表示
 * 示例：
 *   getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
 *   getIntersection([1, 7], [8, 9]); // null
 */
function getIntersection(...args) { //剩余运算符 [[5,2],[6,7]]
    let lArr = [];
    let rArr = [];

    for (let item of args) {
        const [l, r] = item.sort((a, b) => a - b) //将第二个下标小于第一个的进行调整
        lArr.push(l);
        rArr.push(r);
    }

    const lMax = Math.max(...lArr); //选出第一个下标比较打的值
    const rMin = Math.min(...rArr); //选出第二个下标比较小的值

    return lMax > rMin ? null : [lMax, rMin];
}

console.log(getIntersection([5, 2], [4, 9], [3, 6]));
console.log(getIntersection([4, 9], [9, 10]));
console.log(getIntersection([4, 8], [9, 10]));