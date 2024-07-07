let temp=[499,23,1,54,26,74,34,75,98,48,90,81,3,6,9]

function BubleSortIterave(arr){
    let arrLength=arr.length;
    for(let i=0;i<arrLength;i++){
        for(let j=0;j<arrLength-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;

}


console.log(BubleSortIterave(temp))