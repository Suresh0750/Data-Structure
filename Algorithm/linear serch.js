

let arr = [1,2,3,4,5]
function serch(arr,key){

    let i=0
    while(i<arr.length){

        if(key === arr[i]) return i   //* return where it is

        i++
    }

    return -1
}


console.log(serch(arr,3))
console.log(serch(arr,10))