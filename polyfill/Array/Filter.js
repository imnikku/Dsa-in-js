let arr = [1, 2, 4, 5, 24, 24, 534, 235, 249];
Array.prototype.filter = null;
let result = arr.filter((item) => (item > 4 ? item : 1));

if (Array.prototype.filter == null) {
  Array.prototype.filter = function (callback) {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        tempArr.push(this[i]);
      }
    }
    return tempArr;
  };
}

let result1 = arr.filter((item) => (item > 4 ? item : 1));
console.log(result);
console.log(result1);
