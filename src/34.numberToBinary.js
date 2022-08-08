function numberToBinary(num) {
    const result = [];

    if (num < 0) {
        return num;
    }

    // 使用 do while 解决 num 等于 0 的情况
    do {
        var temp = num % 2;
        temp == 0 ? result.push('0') : result.push('1');
        num = Math.floor(num / 2);
    } while (num != 0);

    // 反转数组
    result.reverse();

    return result.join('');
}