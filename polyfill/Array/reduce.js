let arr = [2, 4, 5, 6];
const result = arr.reduce((acc, curr, index, newArr) => {
  console.log("acc", acc);
  return acc + curr;
}, 2);

Array.prototype.myReduce = function (callback, initialValue = null) {
  let result = initialValue;

  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};
const result1 = arr.myReduce((acc, curr, index, newArr) => {
  return acc + curr;
}, 2);

console.log(result);
console.log(result1);
