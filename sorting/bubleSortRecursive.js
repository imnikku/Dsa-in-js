function bubleSortRecursive(arr,lastIndex){
    if(lastIndex<=0){
        return arr
    }
    for(let i=0;i<lastIndex;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
  return  bubleSortRecursive(arr,lastIndex-1)

}
let temp=[499,23,1,54,26,74,34,75,98,48,90,81,3,6,9]
console.log(bubleSortRecursive(temp,temp.length-1))
