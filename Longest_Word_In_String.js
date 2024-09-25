// ***********************************************
// Longest Word in String
// ***********************************************
let word = "Watch,  javascript justtesting, course on youtube justtestisgs";

// first ........
function LongestString1(str) {
  if (str.trim() == "") {
    return false;
  }
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}
// Second
function LongestString2(str) {
  if (str.trim() == "") {
    return false;
  }
  return str
    .split(" ")
    .reduce((pre, cur) => (cur.length - pre.length > 0 ? cur : pre), "");
}
// third .....
function LongestString3(str) {
  if (str.trim() == "") {
    return true;
  }
  let arr = str.split(" ");
  let maxLength = Math.max(...arr.map((item) => item.length));
  // find and filter
  return arr.find((item) => item.length == maxLength);
  //   return arr.filter((item) => item.length == maxLength)[0];
}

// four
function LongestString4(str) {
  if (str.trim() == "") {
    return true;
  }
  let longestString = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}
// five
function LongestString5(str) {
  let newArray = [];
  let newArrayIndex = 0;
  let blankString = "";
  let arrayString = "";
  for (let i = 0; str[i] != undefined; i++) {
    if (str[i] == " ") {
      newArray[newArrayIndex] = arrayString;
      arrayString = "";
      newArrayIndex++;
    } else {
      blankString += str[i];
      arrayString += str[i];
    }
  }

  if (arrayString != " ") {
    newArray[newArrayIndex] = arrayString;
  }
  if (blankString == "") {
    return false;
  }
  let longString = "";
  let longStringLength = 0;
  for (let i = 0; newArray[i] != undefined; i++) {
    let len1 = 0;
    for (len1 = 0; newArray[i][len1] != undefined; len1++) {}
    if (len1 > longStringLength) {
      longStringLength = len1 - 1;
      longString = newArray[i];
    }
  }
  return longString;
}

// six way .....
function LongestString6(str) {
  let longestSting = "";
  let longeststringCount = 0;
  let count = 0;
  let countString = "";
  for (let i = 0; str[i] != undefined; i++) {
    if (str[i] == " " || str[i] == ",") {
      if (count > longeststringCount) {
        longeststringCount = count;
        longestSting = countString;
      }
      count = 0;
      countString = "";
    } else {
      count += 1;
      countString += str[i];
    }
  }

  if (longeststringCount == 0 || count == 0) {
    return false;
  } else if (count > longeststringCount) {
    return countString;
  } else {
    return longestSting;
  }
}
let word1 = "                 ";

console.log(LongestString6(word1));
