

let arr = [1,2,3,2,1,4,3,5,-5,-6,-7,]

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

console.log(insertSort(arr))

