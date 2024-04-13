// Factorial Function: Write a recursive function to calculate the factorial of a number


function recursionFuction(n){

   
    if (n<=2) return n


    return n*recursionFuction(n-1)
}



// console.log(recursionFuction(5))

let i=0

while(i<10){

    console.log(` ${i} : ${recursionFuction(i)}`)
    i++
}

