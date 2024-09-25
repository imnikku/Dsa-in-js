// check is polidrom ........
// Note:-  ignore (.,'')
// case insensitive

let word = "A man, a plan, a canal, Panama.";
let word1 = "A man, a plan, a canal, Panama is";

// first way ...
function isPolidrom1(str) {
  let finalStr = str.toUpperCase()?.replace(/\W/g, "");
  console.log(finalStr);
  for (let i = 0; i < finalStr.length; i++) {
    if (finalStr[i] !== finalStr[finalStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// second way .....
function isPolidrom2(str) {
  let finalStr = str.toUpperCase()?.replace(/\W/g, "");
  return finalStr == finalStr.split("").reverse().join("");
}

console.log(isPolidrom2(word));
