function BinarySearchRecursive(arr,left,right,num){
    if(left>=right){
        return -1;
    }
    let pos=left+Math.floor((right-left)/2);
    console.log(pos,right,left)
    if(arr[pos]==num){
        return pos
    }
    if(arr[pos]<num){
      return  BinarySearchRecursive(arr,pos+1,right,num)
    }else{
        return BinarySearchRecursive(arr,left,pos,num)

    }

}
let temp=[2,3,4,5,6,7,8,9,12,13,16,18,23,25,27,34,35,36];
console.log(BinarySearchRecursive(temp,0,temp.length-1,4))

