// Write a function to calculate the sum of squares of all elements in an Array. For example, given the array [1,2,3], the  function should return 14 because 1*1+2*2+3*3=1+4+9=14
// first  way ............
function sumOfSquares1(arr) {
  let total = 0;
  for (let i = 0; arr[i] != undefined; i++) {
    total += arr[i] * arr[i];
  }
  return total;
}

// second way ......
function sumOfSquares2(arr) {
  return arr.reduce((acc, val) => (acc += val * val), 0);
}

console.log(sumOfSquares2([1, 2, 3, 4]));
