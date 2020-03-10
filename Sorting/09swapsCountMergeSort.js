function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    } else {
        let midPoint = Math.floor(arr.length / 2)
        let left = arr.slice(0, midPoint);
        let right = arr.slice(midPoint)
        return merge(mergeSort(left), mergeSort(right))
    }
}

function merge(left, right) {
    let result = [];
    let swaps = 0;

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            swaps++
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    console.log(swaps)
    return [...result, ...left, ...right];
}


console.log(mergeSort([9, 8, 4, 1, 10]))
