function bubbleSort(arr) {

    let noSwaps;

    for (let i = 0; i < arr.length; i++) {
        noSwaps = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break
    }

    return arr;
}

console.log(bubbleSort([90, -20, 100, 0, -2000]))