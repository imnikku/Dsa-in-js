// ********** Check Triangle type **************************

function checkTriangleType(x, y, z) {
  if (x === y && y === z) {
    return "Equilateral";
  } else if (x === y || y === z) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

console.log(checkTriangleType(2, 2, 2));
console.log(checkTriangleType(2, 4, 4));
console.log(checkTriangleType(2, 4, 8));
