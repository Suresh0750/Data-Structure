
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

// console.log(recWithFibonacci(5))

// while(i<10){                             //* call recWithFibonacci

//     console.log(recWithFibonacci(i))
//     i++
// }