// This function accepts an array and a value and returns value if found else -1

function linearSearch(arr, value) {
    for (let element of arr) {
        if (value === element) {
            return value
        }
    }
    return -1;
}