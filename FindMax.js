// Find Max ...................

let temArr = [3, -3, 53, 56, 1303, 42];
// first way ....
function FindMax1(arr) {
  return Math.max(arr);
}
// first way .....
function FindMax2(arr, ...remaining) {
  let temp = [];
  if (Object.prototype.toString.call(arr) === "[object Object]") {
    return NaN;
  } else if (typeof arr != "string" && arr.length > 0) {
    temp = [...arr, ...remaining];
  } else if (typeof arr != "string") {
    temp = [arr, ...remaining];
  } else {
    temp = arr;
  }

  if (!temp) {
    return -Infinity;
  }
  if (
    Object.prototype.toString.call(temp) === "[object Object]" ||
    (typeof temp == "string" && temp?.trim().toString())
  ) {
    return NaN;
  }
  if (typeof temp == "string" && !temp?.trim().toString()) {
    return 0;
  }
  if (typeof temp == "number") {
    return temp;
  }
  if (temp.includes(NaN) || temp.includes(undefined)) {
    return NaN;
  }

  return temp.sort((a, b) => b - a)?.[0] || 0;
}
console.log(Math.max(NaN, -4, 3));
console.log(FindMax2(NaN, -4, 3));

// console.log(Array.isArray(temArr));
// const client = Object.create(temArr);
// console.log(temArr instanceof Object);
// console.log(Object.prototype.toString.call(client) === "[object Object]");
