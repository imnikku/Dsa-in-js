function LenearsearchRecursive(arr,start,num){
    if(start>=arr.length-1){
        return -1
    }
    if(arr[start]==num){
        return start;
    }
  return  LenearsearchRecursive(arr,start+1,num)
    
}
let temp=[499,23,1,54,26,74,34,75,98,48,90,81,3,6,9]

console.log(LenearsearchRecursive(temp,0,4))

 