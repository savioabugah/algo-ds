function bubbleSort(arr) {
    swaps = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1 ]) {
                swaps++;
                console.log(arr[j], arr[j + 1])
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }

        }
        console.log(arr)
    }
    console.log(swaps)
    return arr;
}


console.log(bubbleSort([6,4,1]))
