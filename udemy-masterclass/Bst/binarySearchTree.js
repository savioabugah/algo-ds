class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, currentNode=this.root) {
        const node = new Node(val);
        if (!currentNode) {
            this.root = node;
            return this;
        }
        if (val > currentNode.val) {
            if (!currentNode.right) {
                currentNode.right = node;
            } else {
                this.insert(val, currentNode.right)
            }
        } else {
            if (!currentNode.left) {
                currentNode.left = node;
            } else {
                this.insert(val, currentNode.left)
            }
        }
    }
}
