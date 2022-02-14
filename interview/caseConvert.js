// 切换一个字符串中字母的大小写

function caseConvert(str) {
    return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2) => {
        return `${s1.toUpperCase()}${s2.toLowerCase()}`
    })
}
console.log(caseConvert('aaa111AAA222CCCbbb333'))