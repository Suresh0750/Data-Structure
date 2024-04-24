
// * normal logic I put this logic
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

// console.log(binary([1,2,3,4,5,6],5))
// console.log(binary([1,2,3,4,5,6],6))
// console.log(binary([1,2,3,4,5,6],2))
// console.log(binary([1,2,3,4,5,6],9))
// console.log(binary([1,2,3,4,5,6],3))
// console.log(binary([1,2,3,4,5,6],7))


// function binarySearch(arr,target){

//     let left = 0
//     let right = arr.length-1
    

//     while(left<=right){

//         let mid = Math.floor((right+left)/2)

//         if(target == arr[mid]) return mid

//         if(target <arr[mid]) right = mid-1
//         else left = mid+1
//     }

// }


// * correct method of binnary search

function binarySearch(arr,target){

    let start = 0
    let end = arr.length

    while(start<=end){

        let mid =Math.floor((start+end)/2)

        if(arr[mid] == target){

            return mid
        }else if(arr[mid]<target){

            start = mid+1

        }else {
            end = end-1
        }
    }
    
    return -1
}

// console.log(binarySearch([1,2,3,4,5],3))
// console.log(binarySearch([2,4,6,8,10],8))
// console.log(binarySearch([3,6,9,12],6))


function firstOccurance(arr,val){
    if(arr.length==0) return -1

    let left = 0
    let right = arr.length-1
    let res = -1
    while(left<=right){

        let mid = Math.floor((left+right)/2)

        if(arr[mid]==val){
            res = mid
            right = mid-1
        }else if(arr[mid]<val) left = mid+1
        else right = mid-1

    }

    return res
}


console.log(firstOccurance([1,2,3,3,3,4,4,4,5,6,6,7,7,8,9,10,11],3))    // * firstOccurace mean we search some value but we want exact first where it place at that index


function lastOccurance(arr,val){
    
    if(arr.length==0) return -1

    let left = 0
    let right = arr.length-1
    let res = -1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]==val){
            res = mid
            left = mid+1
        }else if(arr[mid]<val) left = mid+1
        else right = mid-1
    }

    return res
}

console.log(lastOccurance([1,2,3,3,3,4,4,4,5,6,6,7,7,8,9,10,11],3))