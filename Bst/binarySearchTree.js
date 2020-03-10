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

    insert(val, currentNode = this.root) {
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

    find(val, currentNode = this.root) {
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

    validate(root = this.root, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
        if (!root) return true;

        if ((root.val < max) && (root.val > min) && this.validate(root.left, min, root.val) && this.validate(root.right, root.val, max)) {
            return true;
        } else {
            return false;
        }
    }

    bfs() {
        let queue = [];
        let result = [];
        let firstItem = this.root;

        queue.push(firstItem)

        while (queue.length) {
            firstItem = queue.shift();
            result.push(firstItem);
            if (firstItem.left) {
                queue.push(firstItem.left)
            }
            if (firstItem.right) {
                queue.push(firstItem.right)
            }
        }

        return result;
    }

    dfsPreorder() {
        let data = []
        let current = this.root;

        function traverse(node) {
            data.push(node.val)
            if (node.left) {
                traverse(node.left)
            };
            if (node.right) {
                traverse(node.right)
            };
        }

        traverse(current);

        return data;
    }

    dfsInorder() {
        let result = []

        function traverse(current) {
            if (current.left) {
                traverse(current.left)
            };
            result.push(current.val);
            if (current.right) {
                traverse(current.right)
            };
        }

        traverse(root);

        return result;
    }

    dfsPostorder() {
        let result = [];

        function traverse(current) {
            if (current.left) {
                traverse(current.left);
            }
            if (current.right) {
                traverse(current.right);
            }
            result.push(current.val)
        }

        traverse(this.root)

        return result;
    }
}

let bst = new BST();
let n1 = new Node(10)
let n2 = new Node(6);
let n3 = new Node(3);
let n4 = new Node(12);

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);


console.log(bst.validate(10))

console.log(bst.dfsPreorder())
