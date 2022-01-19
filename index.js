const test1 = require('./test/1.curry.test');
const test2 = require('./test/2.curry.test');
const test6 = require('./test/6.deepClone.test');
const test7 = require('./test/7.EventEmitter.test');
const test8 = require('./test/8.observer.test');
const test12 = require('./test/12.bst.test');
const test14 = require('./test/14.bind.test');
const test15 = require('./test/15.flat.test');
const test17 = require('./test/17.toTree.test');
const test20 = require('./test/20.bubbleSort.test');
const test21 = require('./test/21.selectionSort.test');
const test22 = require('./test/22.insertionSort.test');

const dir = `task`;

// 函数柯里化
test1(require(`./${dir}/1.curry`));
test2(require(`./${dir}/2.curry`));

// 深拷贝
test6(require(`./${dir}/6.deepClone`));

// 发布订阅
test7(require(`./${dir}/7.EventEmitter`));

// 观察者
test8(require(`./${dir}/8.observer`));

// 二分搜索树
test12(require(`./${dir}/12.bst`));

// Bind
test14(require(`./${dir}/14.bind`));

// flat
test15(require(`./${dir}/15.flat`));

// 数组转树
test17(require(`./${dir}/17.toTree`));

// 冒泡排序
test20(require(`./${dir}/20.bubbleSort`));

// 选择排序
test21(require(`./${dir}/21.selectionSort`));

// 插入排序
test22(require(`./${dir}/22.insertionSort`));
