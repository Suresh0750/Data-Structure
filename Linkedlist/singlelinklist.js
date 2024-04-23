// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class linkedlist {

//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;

//     }

//     AddToFirst(val) {
//         const node = new Node(val);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//             this.size++;
//             return;
//         }


//     }

//     print() {
//         if (this.size > 0) {
//             let curr = this.head;
//             let listvalues = ""
//             while (curr) {
//                 listvalues += `${curr.val} `;
//                 curr = curr.next;

//             }
//             console.log(listvalues);
//         } else {
//             console.log("list is empty");
//         }
//     }
// }

// const list = new linkedlist();

// list.AddToFirst(1)
// list.AddToFirst(2)
// list.AddToFirst(3)
// list.AddToFirst(4)
// list.AddToFirst(5)
// list.print()





// class Node {
//     constructor (val){
//         this.head = null
//         this.next = null
//     }
// }


// class linkedList{

//     constructor (){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){

//         return this.size
//     }
// }

// let list = new linkedList

// console.log(list.isEmpty())
// console.log(list.getSize())


class Node{
    constructor(val){
        this.head = null
        this.next = null
    }
}


class linkedList{

    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size 
    }

    
}


let list1 = new linkedList


console.log(list1.isEmpty())
console.log(list1.getSize());