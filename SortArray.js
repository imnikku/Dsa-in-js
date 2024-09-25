// *********************** Sort Array ******************************
// Note :-  Not allowed  to use built-in method
//  Note :- No change in original array

let arrayData = [12, 3, 54, 23, 65, 43, 65];
let arrayData1 = [1, 2, 3, 4, 5, 6];

// first way ........................
function sort1(arr) {
  return arr.sort((a, b) => a - b);
}

// second way ......... Selection Sort
function SelectionSort(arr) {
  for (let i = 0; arr[i] != undefined; i++) {
    for (let j = i + 1; arr[j] != undefined; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
// third way ............ Bubble Sort .......
function BubbleSort(arr) {
  for (let i = 0; arr[i] != undefined; i++) {
    for (let j = 0; arr[j + i] != undefined; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// third way but best way  Bubble sort
function BestBubbleSort(arr) {
  for (let i = 0; arr[i] != undefined; i++) {
    let traverse = false;
    for (let j = 0; arr[j + i] != undefined; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        traverse = true;
      }
    }
    if (!traverse) {
      break;
    }
  }
  return arr;
}

// fourth way  Insertion Sort
function InsertionSort(arr) {
  for (let i = 1; arr[i] != undefined; i++) {
    let j = i;
    while (j >= 0) {
      if (arr[j - 1] > arr[i]) {
        [arr[j - 1], arr[i]] = [arr[i], arr[j - 1]];
        break;
      }
      j--;
    }
  }

  return arr;
}

// five way ........ 

console.log(InsertionSort([...arrayData]));
console.log(arrayData);
