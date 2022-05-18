const calcRpn = require('./calcRpn');
const toRpn = require('./toRpn');


const str = '1+2+3*2';
console.log('   str：', str);

const rpnExp = toRpn(str);
console.log('rpnExp：', rpnExp);

const result = calcRpn(rpnExp);
console.log('result：', result);