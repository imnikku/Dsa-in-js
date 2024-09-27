function mergeSortRecursive(arr,start,end){
    console.log(start,end)
    if(start>=end){
        return
    }
    let mid=Math.floor(start+(end-start)/2)
    console.log('fist call',start,mid)
    mergeSortRecursive(arr,start,mid)
    console.log('second call',mid+1,end)
    mergeSortRecursive(arr,mid+1,end)
    console.log('then')
    mergeSortedArr(arr,start,mid,end)

    return arr

}

function mergeSortedArr(arr,start,mid,end){
    

}

let temp=[4,23,1,54,26,74,34]
console.log(mergeSortRecursive(temp,0,temp.length-1))
