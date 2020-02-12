function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}


function radixSort(nums) {
  for (let i = 0; i < mostDigits(nums); i++) {
    let buckets = Array.from({length: 10}, () => []);

    for (let num of nums) {
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    nums = [].concat(...buckets)

  }

  return nums;
}

console.log(radixSort([4, 1, 2, 3, 9, 10]))



