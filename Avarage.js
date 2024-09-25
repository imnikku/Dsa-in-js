// first way ....
function FindAvarage1(arr) {
  return arr.reduce((acc, pre) => acc + pre, 0) / arr.length;
}
// second way ...

function FindAvarage2(arr) {
  let sum = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }
  return sum / length;
}
console.log(FindAvarage2([1, 2, 3, 4, 5]));
