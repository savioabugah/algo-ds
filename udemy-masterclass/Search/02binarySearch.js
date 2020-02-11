// Binary Search works with sorted arrays.
// Has Big O of log(n)

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let midPoint = Math.floor((left + right) / 2);

    while (arr[midPoint] !== val && left <= right) {
        if (val < arr[midPoint]) right = midPoint - 1;
        else left = midPoint + 1;
        midPoint = Math.floor((left + right) / 2);
        
    }
    return arr[midPoint] === midPoint ? midPoint : -1
}

console.log(binarySearch([34, 56,78, 100], 78)) // 1