

function isPowerTwo(n){

    if (n<1) return false
    let i=0
    let check = 1
    while(check<=n){

        if( check == n){
            return true
        }
        i++
        check = Math.pow(2,i)
    }

    return false
}

// console.log(isPowerTwo(2))
// console.log(isPowerTwo(3))
// console.log(isPowerTwo(4))
// console.log(isPowerTwo(5))


let i=0

// while (i<=10) {
    
//     console.log(i, ":" ,isPowerTwo(i));
//     i++
// }


// function isPowertwo(n){

//     if(n<1) return false

//     return (n & (n-1) ) === 0

// }


function isPowerTwo(nums) {

    if (nums<1) {
        return false  
    }

    if (nums===1) {
        return true
        
    }

    return isPowerTwo(nums/2)
    
}


//16
//8
//4
//2
//1


//10
//5
//2.5
//1.23
//0.6
 i=0


while (i<=10) {
    
    console.log(i, ":" ,isPowerTwo(i));
    i++
}


