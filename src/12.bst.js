class Node {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
}

// 二分搜索树
class Tree {
    constructor() {
        this.root = null;
    }

    add(element) {
        if (this.root === null) {
            return this.root = new Node(element);
        }

        let currentNode = this.root;
        let parent;
        let compare;

        while (currentNode) {
            parent = currentNode;
            compare = element > currentNode.element;
            if (compare) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }
        }

        const node = new Node(element, parent);

        if (compare) {
            parent.right = node;
        }
        else {
            parent.left = node;
        }
    }

    // 先序遍历（深度优先遍历）
    preOrderTraversal(cb) {
        const traverse = (node) => {
            if (node === null) return;
            cb(node);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(this.root);
    }

    // 中序遍历
    inOrderTraversal(cb) {
        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            cb(node);
            traverse(node.right);
        }

        traverse(this.root);
    }

    // 后序遍历
    postOrderTraversal(cb) {
        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            traverse(node.right);
            cb(node);
        }

        traverse(this.root);
    }

    // 层序遍历（广度优先遍历）
    levelOrderTraversal(cb) {
        const stack = [this.root];
        let index = 0;
        let currentNode;

        while (currentNode = stack[index++]) {
            cb(currentNode);

            const left = currentNode.left;
            const right = currentNode.right;

            left && stack.push(left);
            right && stack.push(right);
        }
    }

    // 反转二叉树
    reverse() {
        const stack = [this.root];
        let index = 0;
        let currentNode;

        while (currentNode = stack[index++]) {
            const temp = currentNode.left;
            currentNode.left = currentNode.right;
            currentNode.right = temp;

            if (currentNode.left) {
                stack.push(currentNode.left);
            }
            if (currentNode.right) {
                stack.push(currentNode.right);
            }
        }
    }
}

module.exports = Tree;

// const tree = new Tree();

// [10, 8, 19, 6, 15, 22, 20].forEach(i => tree.add(i));

// tree.preOrderTraversal(node => console.log(node.element));
// console.log('----')
// tree.inOrderTraversal(node => console.log(node.element));
// console.log('----')
// tree.postOrderTraversal(node => console.log(node.element));
// console.log('----')
// tree.levelOrderTraversal(node => console.log(node.element));
