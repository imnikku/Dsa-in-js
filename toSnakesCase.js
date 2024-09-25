// Write a function to convert a string to snakecase
function toSnakeCase(str) {
  return str
    ?.split(" ")
    ?.filter((inner) => inner != "")
    ?.map((item) => item.toLowerCase())
    .join("_");
}

console.log(toSnakeCase("    nitesh    kumar    singh"));
