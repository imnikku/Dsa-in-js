function ContainsDuplicate1(arr) {
  let obj = {};
  for (let i = 0; arr[i] != undefined; i++) {
    if (obj[arr[i]]) {
      return true;
    } else {
      obj[arr[i]] = true;
    }
  }
  return false;
}
function ContainsDuplicate2(arr) {
  return arr.length != new Set(arr).size;
}
function ContainsDuplicate3(arr) {
  let map = new Map();
  for (let i = 0; arr[i] != undefined; i++) {
    if (map.get(arr[i])) {
      return true;
    } else {
      map.set(arr[i], true);
    }
  }
}
function ContainsDuplicate4(arr) {
  let map = new Map();
  for (let i of arr) {
    if (map.get(i)) {
      return true;
    } else {
      map.set(i, true);
    }
  }
  return false;
}

console.log(ContainsDuplicate4([1, 2, 3, 4]));
