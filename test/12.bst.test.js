const { success, fail } = require("./utils");

const testName = `二叉搜索树：BST`;

module.exports = (Tree) => {
    const tree = new Tree();

    [10, 8, 19, 6, 15, 22, 20].forEach(i => tree.add(i));


    const arr1 = [];
    tree.preOrderTraversal(node => arr1.push(node.element));

    const arr2 = [];
    tree.inOrderTraversal(node => arr2.push(node.element));

    const arr3 = [];
    tree.postOrderTraversal(node => arr3.push(node.element));

    const arr4 = [];
    tree.levelOrderTraversal(node => arr4.push(node.element));

    const passed =
        arr1.join(',') === '10,8,6,19,15,22,20'
        && arr2.join(',') === '6,8,10,15,19,20,22'
        && arr3.join(',') === '6,8,15,20,22,19,10'
        && arr4.join(',') === '10,8,19,6,15,22,20';

    if (passed) {
        success(testName);
    }
    else {
        fail(testName);
    }
}