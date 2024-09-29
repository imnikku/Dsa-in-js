require("./ForEach");

let temp = [3, 52, 22, 98, 477, 323];

let result = temp.map((item) => (item > 4 ? item * 20 : 0));
Array.prototype.myMap = function (callback) {
  let temArr = [];
  for (let i = 0; i < this.length; i++) {
    temArr.push(callback(this[i], i, this));
  }
  return temArr;
};
let result1 = temp.myMap((item) => (item > 4 ? item * 20 : 0));
let newResult = temp.myForEach((item) => item);
console.log(result);
console.log(result1);
console.log(newResult);
