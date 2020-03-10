class Node {
    constructor(val) {
        this.val = val;
        this.previous = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // Create new node
        const newNode = new Node(val);

        if (!this.head) {
            // when the head is empty.
            this.head = newNode;
            this.tail = this.head;
        } else {
            // when there is a head and tail.
            this.tail.next = newNode;
            newNode.previous = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return;
        let lastNode;
        if (!this.head.next) {
            lastNode = this.head;
            this.head = null;
            this.tail = null;
        } else {
            lastNode = this.tail;
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        this.length--;
        lastNode.previous = null;
        return lastNode;
    }

    shift() {
        if (!this.head) return;
        let shiftedNode;
        if (!this.head.next) {
            shiftedNode = this.head;
            this.head = null;
            this.tail = null;
        } else {
            shiftedNode = this.head;
            this.head = this.head.next;
            this.head.previous = null;
        }

        shiftedNode.next = null;
        this.length--;
        return shiftedNode;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.length++;
        } else {
            const oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.previous = this.head;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length || !this.head) return;

        if (index <= Math.floor(this.length / 2)) {
            let currentIndex = 0;
            let current = this.head;
            while(currentIndex < Math.floor(this.length / 2)) {
                if (currentIndex == index) {
                    return current;
                }
                current = current.next;
                currentIndex++;
            }
            return current;
        } else {
            let currentIndex = this.length - 1;
            let current = this.tail;
            while (index > Math.floor(this.length / 2)) {
                if (currentIndex == index) {
                    return current;
                }
                current = current.previous;
                currentIndex--;
            }
            return current;
        }
    }

    insert(index, val) {
        const previousItem = get(index - 1);
        if (!previousItem) return;
        const nextItem = previousItem.next;
        const newNode = new Node(val);

        previousItem.next = newNode;
        newNode.next = nextItem;
        newItem.previous = newNode;
        return this;
    }

    set(index, val) {
        const node = get(index);
        if (!node) return;
        node.val = val;
        return node;
    }

    remove(index) {
        const node = get(index);
        node.previous.next = node.next;
        node.next.previous = node.previous;
        node.next = null;
        node.previous = null;
        return node;
    }

    reverse() {

    }
}

let l = new DoublyLinkedList()
l.push('Savio')
console.log(l)
let poppedItem =l.pop()
console.log(l)
console.log(poppedItem.previous)
