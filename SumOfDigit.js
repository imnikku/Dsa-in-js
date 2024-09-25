// write a function that takes a number as input and returns the sum of its digits.
function SumOfDigits1(num) {
  let str = String(num);
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }
  return result;
}

function SumOfDigits2(num) {
  let result = 0;
  while (num > 0) {
    let temp = num % 10;
    result += temp;
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(SumOfDigits2(1235));
