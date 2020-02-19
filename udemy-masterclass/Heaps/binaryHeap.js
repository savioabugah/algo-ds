class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val);
        let valIndex = this.values.length - 1;
        let parentIndex = Math.floor((valIndex - 1) / 2);

        while (valIndex > 0) {
            if (this.values[valIndex] > this.values[parentIndex]) {
                let temp = this.values[valIndex]
                this.values[valIndex] = this.values[parentIndex]
                this.values[parentIndex] = temp;
                valIndex = parentIndex;
                parentIndex = Math.floor((valIndex - 1) / 2);
            } else {
                break;
            }
        }
        return this;
    }


    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
}

let b = new MaxBinaryHeap()

b.insert(10)
b.insert(5)
b.insert(100)
b.insert(20)
b.insert(908)


console.log(b.values)
