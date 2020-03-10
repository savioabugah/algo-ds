// Write a function called sameFrequency. Given two positive integers, find out if the two
// numbers have the same frequency of digits.

function sameFrequency(leftNumber, rightNumber) {
    let leftNumberString = leftNumber + ""
    let rightNumberString = rightNumber + ""

    if (leftNumberString.length !== rightNumberString.length) {
        return false;
    }

    let frequencyCounter = {};

    leftNumberString.split("").map(item => {
        frequencyCounter[item] = ++frequencyCounter[item] || 1
    });

    console.log(frequencyCounter)

    for (let char of rightNumberString) {
        if (frequencyCounter[char]) {
            --frequencyCounter[char]
        } else {
            return false
        }
    }
    return true
}

console.log(sameFrequency(123, 322))