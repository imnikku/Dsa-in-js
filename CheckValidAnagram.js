function CheckValidAnagram1(str1, str2) {
  return str1.split("").sort().join("") == str2.split("").sort().join("");
}

function CheckValidAnagram2(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let obj = {};
  for (let i of str1) {
    obj[i] = (obj[i] | 0) + 1;
  }
  for (let i of str2) {
    if (obj[i]) {
      obj[i] = obj[i] - 1;
    } else {
      return false;
    }
  }

  return true;
}
console.log(CheckValidAnagram2("niteshe", "ineeths"));
