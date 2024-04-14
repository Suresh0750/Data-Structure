

function recursiveBinary(arr,target){


    return search(arr,target,0,arr.length-1)

}


function search(arr,target,left,right){

    let mid = Math.floor((left+right)/2)

    if(left>right) return -1

    if(arr[mid] == target) return mid

    if(arr[mid]<target) return search(arr,target,left=mid+1,right)

    else return search(arr,target,left,right = right-1)


}



console.log(recursiveBinary([1,2,3,4,5],3));
console.log(recursiveBinary([2,4,6,8,10],7));
console.log(recursiveBinary([3,6,9,12],6));