function maxBinaryGap(string) {
    current = 0;
    next = 1;
    currentMaxGap = 0;

    while (next < string.length) {
        if (string[current] === '1' && string[next] === '1' && (next - current) > 1) {
            currentMaxGap = Math.max(currentMaxGap, next - current);
            current = next;
            next++;
        } else if (string[current] === '1' && string[next] === '0') {
            next++;
        } else {
            current++;
            next++;
        }
    }

    return currentMaxGap;
}

console.log(maxBinaryGap('11'))