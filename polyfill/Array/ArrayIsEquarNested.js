function isEqual(arg1, arg2, symbol = "==") {
  let obj1 = arg1 instanceof Array ? arg1.toSorted() : arg1;
  let obj2 = arg2 instanceof Array ? arg2?.toSorted() : arg2;
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    obj1 instanceof Date ||
    obj1 instanceof String ||
    obj1 instanceof Number ||
    obj1 instanceof Boolean
  ) {
    switch (symbol) {
      case "==":
        return obj1 == obj2;
      case "===":
        return obj1 === obj2;

      default:
        return "Invalid Symbol";
    }
  }
  if (obj1 instanceof Array != obj2 instanceof Array) {
    return false;
  }

  if (obj1 instanceof Array && obj1?.length != obj2?.length) {
    return false;
  }
  if (
    obj1 instanceof Object &&
    Object.keys(obj1)?.length != Object.keys(obj2).length
  ) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let equalValue = true;
  for (let item of keys1) {
    if (
      !isEqual(
        obj1[item] instanceof Array ? obj1[item].toSorted() : obj1[item],
        obj2[item] instanceof Array ? obj2[item]?.toSorted() : obj2[item],
        symbol
      )
    ) {
      equalValue = false;
      break;
    }
  }

  return equalValue;
}

let temp1 = {
  name: "Nitesh",
  age: 25,
  arr: [9, 88, 8],
  info: {
    add: "Bihar",
  },
  hi: undefined,
};
let temp2 = {
  name: "Nitesh",
  age: 25,
  arr: [8, 88, 9],
  info: {
    add: "Bihar",
  },
  hi: undefined,
};
// let arr = [1, 2, 3];
// let arr1 = [2, 1, 3];
// console.log(isEqual(arr, arr1, "==="));
let arr = [3, 4, 5, 6];
let arr2 = [3, 4, 5, 6];
console.log(isEqual(arr, arr2));
