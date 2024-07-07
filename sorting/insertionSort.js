let temp = [499, 23, 1, 99, 26, 74, 34, 75, 98, 48, 90, 81, 3, 6];
function InsertionSort(arr) {
  let arrLength = arr.length;
  for (let i = 1; i < arrLength; i++) {
    let remaining = i;
    while (remaining > 0) {
      if (arr[remaining] < arr[remaining - 1]) {
        [arr[remaining], arr[remaining - 1]] = [
          arr[remaining - 1],
          arr[remaining],
        ];
      } else {
        break;
      }

      remaining--;

    }
  }
  return arr;
}

console.log(InsertionSort(temp));
