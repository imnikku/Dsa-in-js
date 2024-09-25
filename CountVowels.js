// Write a function that takes a string as input and returns the count of vowels in that string. consider 'a','e','i','o' and 'u' as vowels (both lowercase and uppercase).

function CheckIsVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char.toLowerCase());
}

function CountVowels(str) {
  let count = 0;
  for (let i = 0; str[i] != undefined; i++) {
    count += CheckIsVowel(str[i]);
  }
  return count;
}

// second way ...
console.log(CountVowels("hello world"));
