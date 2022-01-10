// 去除制表符(\t)、换行符(\n)、回车符(\r)

function removeSymbol(str) {
    return str.replace(/\t|\n|\r/g, '');
}

const str = `\taaa\tbbb\n888\t777\r999`;

const str2 = removeSymbol(str);
console.log(str2);