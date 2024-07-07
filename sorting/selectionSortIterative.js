function selectionSortIterative(arr){ 
    let arrLength=arr.length;
    for(let i=0;i<arrLength;i++){
        for(let j=i+1;j<arrLength;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr;
}

let temp=[4,23,1,54,26,74,34,75,98,48,90,81,3,6,9]


console.log(selectionSortIterative(temp))
 