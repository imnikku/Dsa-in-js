let temp=[499,23,1,54,26,74,34,75,98,48,90,81,3,6,9]
let temp1=[10,1,2,3,4,5,6,7,8,9]


function BubleSort(arr){
    let arrLength=arr.length;
    for(let i=0;i<arrLength;i++){
        console.log(i)
        let isSorted=true;
        for(let j=0;j<arrLength-1-i;j++){
            if(arr[j]>arr[j+1]){
                isSorted=false;
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
        if(isSorted){
            break;
        }
    }
    return arr;

}


console.log(BubleSort(temp1))