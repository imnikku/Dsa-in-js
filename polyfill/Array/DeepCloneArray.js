Array.prototype.DeepClone = function () {
  function DeepCopy(obj) {
    if (
      typeof obj !== "object" ||
      obj === null ||
      obj instanceof Date ||
      obj instanceof String ||
      obj instanceof Number ||
      obj instanceof Boolean
    ) {
      return obj;
    }
    let cloneData = Array.isArray(obj) ? [] : {};
    let keys = Object.keys(obj);
    for (let item of keys) {
      cloneData[item] = DeepCopy(obj[item]);
    }
    return cloneData;
  }
  return DeepCopy(this);
};
let temp = [3, 45, 6];
let temp1 = temp.DeepClone();
temp.push(4);
let date = new Date();
console.log(temp instanceof Array);
console.log(temp1);
