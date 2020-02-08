function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyCounter = {};

    str1.split('').map(letter => {
        frequencyCounter[letter] = ++frequencyCounter[letter] || 1;
    });

    for (let letter of str2) {
        if (!frequencyCounter[letter]) {
            return false;
        } else {
            --frequencyCounter[letter]
        }
    }

    return true;
}

console.log(validAnagram("azz", "zaz"))