const test1 = require('./test/1.test');
const test2 = require('./test/2.test');

// 函数柯里化
test1(require('./src/1.curry'));
test2(require('./src/2.curry'));