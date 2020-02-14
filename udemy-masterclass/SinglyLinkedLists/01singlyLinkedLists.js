class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        const node = new Node(data);
        let current = this.head;
        this.length++;
        if (!current) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    pop() {
        if (!this.head) return;
        let previous = this.head;
        let current = previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;

        if (this.head === this.tail) {
            this.head = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return;
        let head = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return head;
    }

    unshift(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            let head = this.head;
            this.head = node;
            this.head.next = head;
            this.length++;
        }

        return this;
    }

    get(index) {
        if (index > this.length - 1 || index < 0) return null;
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, data) {
        const node = this.get(index);
        if (node) {
            node.data = data;
            return true;
        }
        return false;
    }

    insert(index, data) {
        if (!this.head && index < 0) return null;
        if(index > this.length) return null;
        if(index === 0) {
            this.unshift(data);
            this.length++;
            return this;
        }

        if(index === this.length) {
            this.push(data);
            this.length++;
            return this;
        }

        const previousNode = get(index - 1);
        const nextNode = previousNode.next
        const newNode = new Node(data);
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index > this.length) return;
        if (index === 0) {
            this.head = null;
            this.length--
            return this;
        }
        if (index === this.length - 1) {
            this.pop();
            this.length--;
            return this;
        }
        const node = this.get(index - 1);
        node.next = node.next.next;
        return this;
    }

    reverse() {
        if (this.length === 0) return;
        if (this.length === 1) return this;
        let current = this.head;
        let next = current.next;
        this.tail = current;

        while(next) {
            previousNext = next.next;
            next.next = current;

            current = next;
            next = previousNext;
        }

        this.head = current;
    }
}
