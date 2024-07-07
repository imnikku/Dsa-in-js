function bubleSortImproveRecursive(arr,lastIndex){
    if(lastIndex<=0){
        return arr
    }
    let isTraverse=true;
    for(let i=0;i<lastIndex;i++){
        if(arr[i]>arr[i+1]){
            isTraverse=false;
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
    if(isTraverse){
        return arr
    }
  return  bubleSortImproveRecursive(arr,lastIndex-1)

}
let temp=[499,23,1,54,26,74,34,75,98,48,90,81,3,6,9]
console.log(bubleSortImproveRecursive(temp,temp.length-1))
