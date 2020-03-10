function swap(arr, index1, index2) {
  return [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}


function pivotHelper(arr, start=0, end=arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i)
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex

}

function quicksort(arr, start=0, end=arr.length){
  while (start < end) {
    let pivotIndex = pivotHelper(arr, start, end);
    start = quicksort(arr, start, pivotIndex - 1);
    end = quicksort(arr, pivotIndex + 1, end);
  }

  return arr;
}
console.log(quicksort([4, 1, 2, 3, 9, 10]))
