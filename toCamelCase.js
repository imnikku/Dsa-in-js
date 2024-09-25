// Write a function to convert a string to camelcase
function toCamelCase(str) {
  let totalStr = "";
  str
    ?.split(" ")
    ?.filter((inner) => inner != "")
    ?.map((item, index) => {
      if (index == 0) {
        totalStr += item[0].toLowerCase() + item.slice(1);
      } else {
        totalStr += item[0].toUpperCase() + item.slice(1);
      }
    });

  return totalStr;
}

console.log(toCamelCase("   nitesh        kumar singh    "));
