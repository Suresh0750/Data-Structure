let arr = [1,2,3,4,5]



arr.push(9)  //* add the number to back side

arr.pop()      //* remove the number from the back side

arr.shift()    //*  remove first element 


arr.unshift(0)

// console.log(arr)

// console.log(arr)


let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]


let arr3 = arr1.concat(arr2)    //* merging two array


        let k = arr1.map((val)=> val*2)  // * map only return the value 


        let multiplyByTwo = arr3.map((a) => a * 2);
        // console.log(multiplyByTwo);
        // console.log(k);

        let even = arr3.filter((val)=>{ return val%2!=0})  // * if we mention the {} inside of any inbuild codition map, filter we must mention return atherwise it won't return

        // console.log(even);

       arr2.forEach(element => element*2);   //* foreach we can't return value

        // console.log(arr2,"p");
// console.log(arr3)



// console.log(arrayBuffer())

//# search an element where its placed

let array = [1,2,3,4,5,6,7,8,9]

    function search(arr,t){
        let i=0
        while(i<arr.length){

            if(arr[i]==t) return true
            
            i++
        }

        return false
    }



// console.log(search(array, 3)); // O(n)
// console.log(search(array, 0)); // O(n)

 // # reverse array


 function reverse(arr){


    let i=0
    let j = arr.length-1
    let temp ;

    while(i<j){

        temp = arr[i]
        arr[i++] = arr[j]
        arr[j--] = temp

    }
    return arr
 }

//  console.log(reverse(array))
//  console.log(reverse([11,22,33,44,55,66,77]));

// # move 0 back side its working js compiler
let arr4  = [0,0,0,0,1]
function moveZero(arr){

    if(arr.length <2) return arr

    let i = 0
    let j = 1

    let temp 
   for(let j=1;j<arr.length;j++){

    if(arr[i] !=0){ 
        i++
    } else if(arr[i] == 0 && arr[j] != 0){

        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++

    }


   }
   return arr
}

console.log(moveZero(arr4),"p")
console.log(arr)
console.log(moveZero(arr),"p")