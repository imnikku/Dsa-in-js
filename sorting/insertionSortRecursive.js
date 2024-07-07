function InsertionSortRecursive(arr,starting,length){
    if(starting>length){
        return  arr;
    }
    let remaining=starting;
    while(remaining>0){
        if(arr[remaining]<arr[remaining-1]){
            [arr[remaining],arr[remaining-1]]=[arr[remaining-1],arr[remaining]];
        }else{
            break;
        }
        remaining--;

    }
  return  InsertionSortRecursive(arr,starting+1,length)
}

let temp = [499, 23, 1, 99, 26, 74, 34, 75, 98, 48, 90, 81, 3, 6];
console.log(InsertionSortRecursive(temp,1,temp.length))



