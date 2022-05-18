// 运算符优先级映射表
const OPERATOR_PRIORITY_MAP = {
    '#': 0,
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
}

function splitExp(str) {
    return str.match(/\d+|[^\d\s\t]/g);
}

function isNumber(str) {
    return /^\d+$/.test(str);
}

function isOperator(str) {
    return /^[\+\-\*\/#]$/.test(str);
}

/**
 * 普通运算表达式 => 逆波兰运算表达式
 * @param {string} exp 普通运算表达式字符串 
 */
function toRpn(exp) {
    const S1 = [];
    const S2 = [];
    const exp_arr = splitExp(exp).concat('#');

    // 遍历exp_arr
    exp_arr.forEach(item => {
        // 是数字
        if (isNumber(item)) {
            S2.push(+item);
        }
        // 是运算符
        else if (isOperator(item)) {
            let S1_top_item = S1[S1.length - 1];

            // S1为空 或者 运算符优先级 > S1栈顶运算符的优先级
            if (!S1_top_item || OPERATOR_PRIORITY_MAP[item] > OPERATOR_PRIORITY_MAP[S1_top_item]) {
                S1.push(item);
            }
            // <=
            else {
                while (S1_top_item !== '(' && S1.length) {
                    S1_top_item = S1[S1.length - 1];
                    S2.push(S1.pop());
                }

                S1.push(item);
            }
        }
        // 是括号
        else {
            if (item === '(') {
                S1.push(item);
            }
            else if (item === ')') {
                let cur = S1.pop();

                while (cur !== '(') {
                    S2.push(cur);
                    cur = S1.pop();
                }
            }
        }
    });

    return S2.join(' ');
}

module.exports = toRpn;