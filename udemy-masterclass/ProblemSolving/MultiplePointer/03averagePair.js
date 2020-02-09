// Write a function callled averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Constraints:
// Time O(N)
// Space: O(1)

function averagePair(arr, targetAverage) {
    let i = 0;
    let j = arr.length - 1;

    if (arr.length < 2) {
        return false;
    }

    let average;

    while( i < j) {
        average = (arr[i] + arr[j]) / 2;

        if (average === targetAverage){
            return true;

        }else if (average < targetAverage) {
            i++;
        } else {
            j--;
        }
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([], 4))

