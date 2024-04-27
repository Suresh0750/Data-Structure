
let arr = [1,2,3,-3,-3,8,-5,-2,100]
function bubbleSort(arr){

    let again
    let i 
    let temp
    do{
        again = false
        i = 0
        while(i<arr.length-1){
            if(arr[i]>arr[i+1]){
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                again = true
            }
            i++
        }
    }while(again)

    return arr
}


// console.log(bubbleSort(arr))


function insertSort(arr){
    let i = 1
    while(i<arr.length){
        let invalue = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>invalue){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = invalue
        i++
    }
    return arr
}

// console.log(insertSort(arr))

function mergeSort(arr){

    if(arr.length<2) return arr

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid,arr.length)

    return merge(mergeSort(left),mergeSort(right))
}


function merge(left,right){
    let sort = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right]
}


// console.log(mergeSort([1,2,3,-3,-3,8,-5,-2,100]))






function quicksort(arr){

    if(arr.length<2) return arr

    let i = 0
    let left = []
    let right = []
    let playMidvalue = arr[arr.length-1]

    while(i<arr.length-1){
        if(arr[i]<playMidvalue){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
        i++
    }

    return [...quicksort(left),playMidvalue,...quicksort(right)]

}


console.log(quicksort(arr))

