function validAnagram(str1, str2) {
    let frequencyOfStr1 = {};
    let frequencyOfStr2 = {};

    for (let char of str1.split('')) {
        frequencyOfStr1[char] = ++frequencyOfStr1[char] || 1;
    }

    for (let char of str2.split('')) {
        frequencyOfStr2[char] = ++frequencyOfStr2[char] || 1;
    }

    if (Object.keys(frequencyOfStr1).length != Object.keys(frequencyOfStr2).length) {
        return false
    }

    const keys = Object.keys(frequencyOfStr1)
    return keys.every(item => frequencyOfStr1[item] == frequencyOfStr2[item]);
}


console.log(validAnagram("azz", "zaz"))