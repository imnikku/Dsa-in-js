// write a function arrasAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e, contain the same elements in the same order), and false otherwise
function ArrayAreEqual1(arr1, arr2) {
  if (arr1?.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(ArrayAreEqual1([3],[4]))
