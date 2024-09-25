// first way ......
function Factorial1(n) {
  if (n < 0 || typeof n == "string") {
    return "Invalid Number";
  }
  if (typeof n != "number") {
    return "Invalid Number";
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// second way .....
function Factorial2(n) {
  if (n < 0 || typeof n == "string") {
    return "Invalid Number";
  }
  if (typeof n != "number") {
    return "Invalid Number";
  }
  if (n == 0) {
    return 1;
  }
  return n * Factorial2(n - 1);
}
console.log(Factorial2(5));
