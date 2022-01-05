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

    _node(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

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

    // 链表反转
    reverse() {
        function r(head) {
            if (head === null || head.next === null) {
                return head;
            }
            let newHead = r(head.next);
            head.next.next = head;
            head.next = null;

            return newHead;
        }

        return r(this.head);
    }
}


let ll = new LinkedList();
[1, 2, 3, 4, 5, 6, 7, 8].forEach(i => {
    ll.add(i)
});

ll.add(1, 100);
const r = ll.remove(1);
// console.log('删掉了', r);
// console.dir(ll, { depth: 1000 })
console.dir(ll.reverse(), { depth: 1000 });