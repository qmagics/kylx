// 获取一个字符串在另一个字符串中出现的次数

// split
// function getStringAppearCount(str, parentStr) {
//     return parentStr.split(str).length - 1;
// }

// 正则
function getStringAppearCount(str, parentStr) {
    return parentStr.match(new RegExp(str, 'g')).length;
}

console.log(getStringAppearCount('1','4112'))