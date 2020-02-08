// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will be sorted.

function countUniqueValues(arr) {
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    console.log(arr)
    return i + 1;
}

console.log(countUniqueValues([1, 2, 1, 3, 5, 9, 9, 9, 10]))