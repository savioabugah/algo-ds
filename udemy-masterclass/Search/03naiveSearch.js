function naiveSearch(neddle, hay) {
    currentHay = 0;
    currentNeddle = 0; 

    occurrenceCount = 0

    while (currentHay < hay.length) {
        if (currentNeddle === neddle.length - 1) {
            occurrenceCount++;
            currentNeddle = 0;
        }


        if (hay[currentHay] === neddle[currentNeddle]) {
            currentHay++;
            currentNeddle++;
        } else {
            currentHay++;
        }
    }

    return occurrenceCount;
}

console.log(naiveSearch("omg", "omgtestsomgfdsafdsomg"))
