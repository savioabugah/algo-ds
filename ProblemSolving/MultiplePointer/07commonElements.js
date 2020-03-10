function commonElements(arr1, arr2) {
    let i = 0;
    let j = 0;

    let common = []

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            common.push(arr1[i])
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return common;
}

console.log(commonElements([1, 2, 3, 5, 10], [1, 3, 8, 9, 10]))