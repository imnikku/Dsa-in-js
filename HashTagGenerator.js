// *********************************************************
//                   HashTag Generator
// *********************************************************

let word = "nitesh kumar singh";

// first way ....
function HashTagGenerator1(str) {
  if (str.trim() == " ") {
    return false;
  }
  return `#${str
    .split(" ")
    .map((item) => item.replace(item[0], item[0].toUpperCase()))
    .join("")}`;
}

// second way ......
function HashTagGenerator2(str) {
  if (str.trim() == " ") {
    return false;
  }
  return `#${str
    .split(" ")
    .map((item) => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join("")}`;
}
// Third way

function HashTagGenerator3(str) {
  if (str.trim() == " ") {
    return false;
  }
  return str.split(" ").reduce((pre, cur) => {
    return (pre += `${cur[0].toUpperCase()}${cur.slice(1)}`);
  }, "#");
}
function HashTagGenerator4(str) {
  if (str.trim() == " ") {
    return false;
  }
  let newArry = str.split(" ");
  let hasttagString = "#";
  for (let i = 0; newArry[i] != undefined; i++) {
    hasttagString += newArry[i].replace(
      newArry[i][0],
      newArry[i][0].toUpperCase()
    );
  }
  return hasttagString;
}

// not using trim, split , slice,replace only use
function HashTagGenerator5(str) {


}

console.log(HashTagGenerator4(word));
