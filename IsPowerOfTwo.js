// Write a function called ispoweroftwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

const isPowerofTwo = (num) => {
  let isPower = false;
  for (let i = 1; i < num / 2; i++) {
    if (2 ** i == num) {
      isPower = true;
      break;
    }
  }
  return isPower;
};

console.log(isPowerofTwo(12));
