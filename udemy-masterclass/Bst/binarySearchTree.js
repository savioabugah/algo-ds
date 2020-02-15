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
        if (val === currentNode.val) {
            return;
        }
        if (val > currentNode.val) {
            if (!currentNode.right) {
                currentNode.right = node;
            } else {
                return this.insert(val, currentNode.right)
            }
        } else {
            if (!currentNode.left) {
                currentNode.left = node;
            } else {
                return this.insert(val, currentNode.left)
            }
        }
    }

    find(val, currentNode=this.root) {
        if (!currentNode) return;
        if (val === currentNode.val) {
            return currentNode;
        }
        if (val < currentNode.val) {
            if (!currentNode.left) {
                return false
            } else {
                this.find(val, currentNode.left);
            }
        } else {
            if (!currentNode.right) {
                return false
            } else {
                this.find(val, currentNode.right);
            }
        }

    }

    validate(root = this.root, min=Number.MIN_VALUE, max=Number.MAX_VALUE) {
        if (!root) return true;

        if ((root.val < max) && (root.val > min) && this.validate(root.left, min, root.val) && this.validate(root.right, root.val, max)) {
            return true;
        } else {
            return false;
        }
    }
}

let bst = new BST();
let n1 = new Node(10)

bst.root = n1;

let n2 = new Node(6);
let n3 = new Node(3);
let n4 = new Node(12);

bst.insert(n2);
// bst.insert(n3);
// bst.insert(n4);


console.log(bst.find(10))

console.log(bst.validate())
