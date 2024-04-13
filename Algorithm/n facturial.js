
function factorial(n){

    let result = 1
    let i = 2

    while(i<=n){

        result *=i
        
        i++

    }

    return result

}


console.log(factorial(4))       // 4!
console.log(factorial(5))       // 5!
console.log(factorial(7))       // 7!