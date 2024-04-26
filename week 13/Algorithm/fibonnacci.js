
//*  Fibonacci Sequence:


function Fibonacci(n){           //* normal way

    if(n==0) return [0]
    if(n==1) return [0,1]

    let i=2
    let fibonacci = [0,1]
    while(i<=n){
        
        fibonacci.push((fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]))
        i++
    }

    return fibonacci
    
}


function recWithFibonacci(n){               //* fibonacci in recursion way

    if(n<2) return n
    return recWithFibonacci(n-1)+recWithFibonacci(n-2)
}

let i=0;

function arrFibonacci(n){

    if(n==0) return [0]
    if(n==1) return [0,1]


    let fibonacci = [0,1]

    let i=2
    while(i<n){

        fibonacci.push(calculateFibonacci(i))
        i++
    }

    return fibonacci

}

function 
calculateFibonacci(n){

    if(n<2) return n
    return calculateFibonacci(n-1)+calculateFibonacci(n-2)
}


console.log(arrFibonacci(6))
console.log(arrFibonacci(20))
console.log(arrFibonacci(30))
console.log(arrFibonacci(40))
// console.log(recWithFibonacci(5))

// while(i<10){                             //* call recWithFibonacci

//     console.log(recWithFibonacci(i))
//     i++
// }