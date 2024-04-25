

// let arr = [1,2,3,4,5]
// function serch(arr,key){

//     let i=0
//     while(i<arr.length){

//         if(key === arr[i]) return i   //* return where it is

//         i++
//     }

//     return -1
// }


function search(arr,val){

    if(arr.length==0) return -1

    let i = 0
    while(i<arr.length){
        if(arr[i]==val){
            return i
        }
        i++
    }
    return -1
}

console.log(search([1,2,3,4,5,6,7,8],6))


function findAllOccurance(arr,val){
    if(arr.length==0) return -1

    let i = 0
    let res = []
    while(i<arr.length){

        if(arr[i]==val){
            res.push(i)
        }
        i++
    }    
    return res
}


console.log(findAllOccurance([1,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7],6))


function minMax(arr){

    if(arr.length == 0) return `no min no max`
    let min = Infinity
    let max = -Infinity

    let i = 0

    while(i<arr.length){

        min = min>arr[i] ? arr[i] : min
        max = max<arr[i] ? arr[i] : max
        i++
    }

    return `min : ${min} and max : ${max}`
}


console.log(minMax([5,3,4,3,5,22,4,5,61,5,2,90]))
console.log(minMax([2]))

// console.log(serch(arr,3))
// console.log(serch(arr,10))