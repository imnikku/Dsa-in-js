// *************** Count Occurences of Characters ***************

let word = "MissIssippi";
let tartgetChar = "p";

// first way
function CountOccurenceOfCharacter1(str, target) {
  let count = 0;
  for (let i = 0; str[i] != undefined; i++) {
    if (str[i].toUpperCase() == target.toUpperCase()) {
      count++;
    }
  }

  return count;
}

// second way .....
function CountOccurenceOfCharacter2(str, target) {
  return str.toUpperCase().split(target.toUpperCase()).length - 1;
}

console.log(CountOccurenceOfCharacter2(word, tartgetChar));
