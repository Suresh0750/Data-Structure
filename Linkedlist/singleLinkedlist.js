
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //* check LinkedList is empty or not
    isEmpty(){
        if(this.size){
            return false            //* size = 0 means if case not working because according to this 0 and null and undifined these condition is there means if is not working
        }else{
            return true
        }
    }
    // * prepend value inside of the node
    prepend(value){

        const node = new Node(value)
        if(this.size == 0){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    // * print the entire value
    print(){

        if(this.size == 0){
            return "LinkedList is empty"
        }else{
            let cur = this.head
            let res = ""

            while(cur){
                res += cur.value+ " "
                cur = cur.next
            }
            console.log(res)
        }
    }

    // * value is add back side of linkedlist
    append(value){

        const node = new Node(value)
        if(this.size == 0){
            this.head  = node  
        }else{

            let prev = this.head

            while(prev.next){
                prev = prev.next
            }

            prev.next = node
        }

        this.size++
    }

    //* insert the element based on index

    insert(value,index){
        if(index<0 && index >this.size) return 
        else if(index == 0) this.prepend(value)
        else{

            let node = new Node(value)
            let prev = this.head

            for(let i=0;i<index-1;i++){
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node
            prev.size++
        }

    }

    //* remove the value from the Node

    remove(index){
        let removeNode;
        if(index<0 && index>this.size){
            return null
        }else if(index == 0){
            removeNode = this.head
            this.head = this.head.next
           
        }else{
            let prev = this.head
            removeNode = prev.next
            for(let i=0;i<index-1;i++){
                prev = prev.next
                removeNode = removeNode.next
            }
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value

    }
}

const list = new LinkedList()

list.append(9)
list.prepend(4)
list.prepend(3)
list.prepend(2)
console.log(list)
list.print()

list.insert(5,3)    // * Here we mention only value and index , index means where we insert the value

list.print()

console.log(list.remove(2))
list.print()