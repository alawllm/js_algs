//node
//piece of data, reference to next node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.hear = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //changing the pointer
            this.tail.next = newNode;
            //setting tail to the new, pushed data
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;

    }
}

let list = new SinglyLinkedList()
list.push('hello')