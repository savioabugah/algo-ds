
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(arr1, arr2) {
  let merged = []
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift())
    } else {
      merged.push(arr2.shift())
    }
  }
  return [...merged, ...arr1, ...arr2]
}

console.log(mergeSort([90, -20, 100, 0, -2000]))
