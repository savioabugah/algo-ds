// This function accepts an array and a value and returns index of value if found else -1

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return i
        }
    }
    return -1;
}