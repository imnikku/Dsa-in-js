function TwoSum1(arr, target) {
  let obj = {};
  for (let i = 0; arr[i] != undefined; i++) {
    let remainning = target - arr[i];
    console.log("i", i, obj[remainning], remainning);
    if (obj[arr[i]] != undefined) {
      return [obj[arr[i]], i];
    } else {
      obj[remainning] = i;
    }
    console.log(obj);
  }
}

console.log(TwoSum1([3, 2, 4], 6));
