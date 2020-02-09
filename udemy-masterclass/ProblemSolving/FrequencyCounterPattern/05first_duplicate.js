function firstDuplicate(arr) {
    let duplicates = {};

    for (let item of arr) {
        if (duplicates[item]) {
            return item
        } else {
            duplicates[item] = 1
        }
    }

    return -1;
}

console.log(firstDuplicate([1, 2, 1, 1, 3, 3])) // 1
console.log(firstDuplicate([2, 1, 3, 5, 3, 2])) // 3
console.log(firstDuplicate([1, 2, 3, 4, 5, 6])) // -1
