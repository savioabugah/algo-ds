function isSubsequence(sub, main) {
    let current = 0;

    for (let letter of main) {
        if (sub[current] === letter) {
            current++
        }
    }
    return current === sub.length
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))