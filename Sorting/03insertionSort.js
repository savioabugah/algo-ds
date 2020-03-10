function insertionSort(arr) {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while (j > 0) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
      j--
    }
    i++;
  }
  return arr;
}

console.log(insertionSort([90, -20, 100, 0, -2000]))
