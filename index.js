const test1 = require('./test/1.curry.test');
const test2 = require('./test/2.curry.test');
const test6 = require('./test/6.deepClone.test');
const test7 = require('./test/7.EventEmitter.test');
const test12 = require('./test/12.bst.test');
const test14 = require('./test/14.bind.test');

const dir = `task`;

// 函数柯里化
test1(require(`./${dir}/1.curry`));
test2(require(`./${dir}/2.curry`));

// 深拷贝
test6(require(`./${dir}/6.deepClone`));

// 发布订阅
test7(require(`./${dir}/7.EventEmitter`));

// 二分搜索树
test12(require(`./${dir}/12.bst`));

// Bind
test14(require(`./${dir}/14.bind`))
