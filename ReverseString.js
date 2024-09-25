// Write a function to reverse a string without using

function reverseString1(str) {
  return str?.split("")?.reverse()?.join("");
}
function reverseString2(str) {
  let temp = str.split("");
  for (let i = 0; i < temp.length / 2; i++) {
    [temp[i], temp[temp.length - 1 - i]] = [temp[temp.length - 1 - i], temp[i]];
  }
  return temp.join("");
}

function reverseString3(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString3("kumar2"));
