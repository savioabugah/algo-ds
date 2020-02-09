// https://www.youtube.com/watch?v=XSdr_O-XVRQ
// This is the Naïve solution,


function firstDuplicate(arr) {
    let firstDuplicateIndex = arr.length;

    for (let j = 0; j < arr.length; j++) {
        for (let i = j + 1; i < arr.length; i++) {
            if (arr[i] === arr[j]) {
                firstDuplicateIndex = Math.min(firstDuplicateIndex, i)
            }
        }
    }
    
    return firstDuplicateIndex === arr.length ? -1 : arr[firstDuplicateIndex]
    
}

console.log(firstDuplicate([1, 2, 1, 1, 3, 3])) // 1
console.log(firstDuplicate([2, 1, 3, 5, 3, 2])) // 3