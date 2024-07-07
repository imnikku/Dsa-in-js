function LinearSearchIterative(arr,num){
    const length=arr.length;
    for(let i=0;i<length;i++){
        if(num==arr[i]){
            return i;
        }
    }
    return -1;

}
let temp=[499,23,1,54,26,74,34,75,98,48,90,81,3,6,9]

console.log(LinearSearchIterative(temp,54))