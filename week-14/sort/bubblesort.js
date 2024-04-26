
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


console.log(bubbleSort(arr))