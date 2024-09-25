// write a function that takes an array of integers as input and removes and duplicate element, returning a new arrray with only the unique element.
// not using any predefined method and function 
// first way ......
function RemoveDuplicate1(arr) {
  return [...new Set(arr)];
}

// second way ......
function RemoveDuplicate2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// third way .....
function RemoveDuplicate3(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  let temp = arr?.[0] || undefined;
  for (let i = 0; i < arr.length; i++) {
    if (temp != arr[i]) {
      result.push(temp);
      temp = arr[i];
    } else if (i == arr.length - 1) {
      result.push(temp);
    }
  }
  return result;
}
// fourth way
function RemoveDuplicate4(arr) {
  let result = [];
  for (let i = 0; arr[i] != undefined; i++) {
    let isExist = false;
    for (let j = 0; result[j] != undefined; j++) {
      if (arr[i] == result[j]) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(RemoveDuplicate4([1, 2, 3, 2, 4, 6, 3, 6, 6]));
