class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 根据索引获取元素
    _node(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // 新增元素
    add(index, element) {

        // 传2个参数就是指定位置插入，一个参数就是追加
        if (arguments.length === 1) {
            element = index;
            index = this.size;
        }

        const head = this.head;

        if (index === 0) {
            this.head = new Node(element, head);
        } else {
            const preNode = this._node(index - 1);

            preNode.next = new Node(element, preNode.next);
        }

        this.size++;
    }

    // 删除元素
    remove(index) {
        let removedNode;

        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        }
        else {
            const preNode = this._node(index - 1);
            removedNode = preNode.next;
            preNode.next = preNode.next.next;
        }

        this.size--;

        return removedNode;
    }

    // 链表反转（递归方式）
    reverse1() {
        function r(head) {
            if (head === null || head.next === null) {
                return head;
            }
            let newHead = r(head.next);
            head.next.next = head;
            head.next = null;

            return newHead;
        }

        this.head = r(this.head);
        return this;
    }

    // 链表反转（循环方式）
    reverse2() {
        let head = this.head;
        if (head === null || head.next === null) {
            return this;
        }

        let newHead = null; // 创建新头

        while (head) { // 如果老表有头，就一直搬运
            let node2 = head.next; // 暂存原链表的下一项
            head.next = newHead; // 老头的next指向新头
            newHead = head;  // 将新头指向老头
            head = node2; // 老头指向下一项
        }
        this.head = newHead;

        return this;
    }
}


let ll = new LinkedList();

[1, 2, 3, 4, 5, 6, 7, 8].forEach(i => {
    ll.add(i)
});

// ll.add(1, 100);
// const r = ll.remove(1);
// console.log('删掉了', r);
console.dir(ll, { depth: 1000 })
// console.dir(ll.reverse2(), { depth: 1000 });
// console.log(ll);
