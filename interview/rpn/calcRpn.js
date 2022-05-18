function calcRpn(expStr) {
    const S = [];

    const list = expStr.split(' ');

    list.forEach(i => {
        let n1 = 0, n2 = 0;
        switch (i) {
            case '+':
                n1 = S.pop();
                n2 = S.pop();
                S.push(n2 + n1);
                break;
            case '-':
                n1 = S.pop();
                n2 = S.pop();
                S.push(n2 - n1);
                break;
            case '*':
                n1 = S.pop();
                n2 = S.pop();
                S.push(n2 * n1);
                break;
            case '/':
                n1 = S.pop();
                n2 = S.pop();
                S.push(n2 / n1);
                break;

            default:
                S.push(parseInt(i));
                break;
        }
    });

    return S.pop();
}

module.exports = calcRpn;