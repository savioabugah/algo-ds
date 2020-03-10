function areThereDuplicates(...args) {
    let frequencyCounter = {};
    for (let arg of args) {
        if (frequencyCounter[arg]) {
            return true;
        } else {
            frequencyCounter[arg] = 1;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 1))