// Write a function to check if a given string starts with a specific substring.

function startWith(str, sub) {
  if (str?.split(" ")[0]?.toString().toUpperCase() == sub.toUpperCase()) {
    return true;
  }
  return false;
}

console.log(startWith("Hello world", "hello"));
