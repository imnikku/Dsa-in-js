const array1 = ["a", "b", "c"];

Array.prototype.myForEach = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};
let aa = array1.myForEach((element, index, a) => {
  return element + "ff";
});
// console.log(array1);
// console.log(aa);
