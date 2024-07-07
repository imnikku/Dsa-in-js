
// binary search Only Plus 
function BinarySearchIterative1(arr,num){
    let left=0;
    let end=arr.length-1;
    let pos;
    while(left<=end){
    pos=Math.floor((left+end)/2)
        if(arr[pos]==num){
            return pos
        }else if(arr[pos]<num){
            left=pos+1;

        }else{
            end=pos-1;
        
        }
    }
    return -1

}

function BinarySearchIterative2(arr,num){
    let left=0;
    let end=arr.length-1;
    let pos;
    while(left<=end){
    pos=left+Math.floor((end-left)/2)
        if(arr[pos]==num){
            return pos
        }else if(arr[pos]<num){
            left=pos+1;

        }else{
            end=pos-1;
        
        }
    }
    return -1

}

let temp=[2,3,4,5,6,7,8,9,12,13,16,18,23,25,27,34,35,36];
console.log(BinarySearchIterative2(temp,5))
