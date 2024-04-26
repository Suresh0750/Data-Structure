

// # method 1

function primeNumber(n){

    let i=2
    while(i<=n){

        if( n % i == 0){
            break
        }

        i++
    }

    return n == i ? true : false;

}

// # method 2
function isPrime(n){
    
    let i=2

    if(n<2) return false

    while(i<n){                 // * loop is start from 2 and I not give = because I don't want to iteration the loop until =n 

        if( n % i == 0){
          return false          // * if 
        }

        i++
    }

    return true

}


// # method 3

function primeNum(n){

    if(n<2) return false

    let i=2
    while(i<=Math.sqrt(n)){

        if( n % i == 0){
            
            return false
        }

        i++
    }

    return true

}
// console.log(primeNumber(1))
// console.log(primeNumber(3))
// console.log(primeNumber(4))
// console.log(primeNumber(5))
// console.log(primeNumber(6))

console.log(primeNum(1))
console.log(primeNum(3))
console.log(primeNum(4))
console.log(primeNum(5))
console.log(primeNum(6))