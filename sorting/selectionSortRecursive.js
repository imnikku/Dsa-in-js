function selectionSortRecursive(arr,start,length){
    if(start>=length){
        return arr;
    }
    for(let i=start+1;i<length;i++){
        if(arr[start]>arr[i]){
            [arr[start],arr[i]]=[arr[i],arr[start]]
        }
    }
  return  selectionSortRecursive(arr,start+1,length)
}
let temp=[4,23,1,54,26,74,34,75,98,48,90,81,3,6,9]
console.log(selectionSortRecursive(temp,0,temp.length))

