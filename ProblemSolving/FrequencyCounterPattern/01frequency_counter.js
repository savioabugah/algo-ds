function same(arr1, arr2) {
    let arr1Squares = arr1.map(item => item * item);
    let frequencyArr1 = {};
    let frequencyArr2 = {};

    for (let item of arr1) {
        frequencyArr1[item] = ++frequencyArr1[item] || 1;
    }

    for (let item of arr2) {
        frequencyArr2[item] = ++frequencyArr1[item] || 1;
    }

    return arr1Squares.every(item => frequencyArr1[item] === frequencyArr2[item])
}

same([1, 2, 3], [1, 4, 9])