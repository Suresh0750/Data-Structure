
function factorial(n){    // * factorial in normal way

    let result = 1
    let i = 2

    while(i<=n){

        result *=i
        
        i++

    }

    return result

}

function factorialRecursive(n){

    if(n<=2) return n == 0 ? 1 : n;

    return n*factorialRecursive(n-1)
    
}


console.log(factorialRecursive(0))
console.log(factorialRecursive(3))
console.log(factorialRecursive(4))




// * call factorial in normal way

// console.log(factorial(4))       // 4!
// console.log(factorial(5))       // 5!
// console.log(factorial(7))       // 7!



