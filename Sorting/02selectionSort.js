function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp
        }
        console.log(arr);
    }
    return arr;
}

console.log(selectionSort([90, -20, 100, 0, -2000]))