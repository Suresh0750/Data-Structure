

function binary(arr,key){

    let left=0
    let right = arr.length-1

    while(left<right){
 
        let mid = Math.round((left+right)/2)
        // console.log(mid,":")
        if(arr[mid] == key) {return mid ; }
        else if(arr[mid] == key) return mid

        if(arr[mid]<key) left+=2
        else right-=2

    }

    return -1

}

console.log(binary([1,2,3,4,5,6],5))
console.log(binary([1,2,3,4,5,6],6))
console.log(binary([1,2,3,4,5,6],2))
console.log(binary([1,2,3,4,5,6],9))