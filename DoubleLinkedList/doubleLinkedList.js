class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        if(this.size) return false
        else return true
    }
    unshift(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
        return value
    }
    shift(){

        if(this.isEmpty()) return null

        let removedValue

        if(this.size==1){
             removedValue = this.head
            this.head = null
            this.tail = null            
        }else{
            removedValue = this.head
            this.head = this.head.next
        }
        this.size--
        return removedValue.value
    }
    print(){
        if(this.isEmpty()) return null
        else{

            let curr = this.head
            let res = ""
            while(curr){
                res += curr.value+ ' '
                curr = curr.next
            }
            console.log(res)
        }
    }
    insert(value,index){
        
        if(index<0 || index>this.size) return undefined
        
        const node = new Node(value)
        if(index==0){
            node.next = this.head
            this.head.prev = node
            this.head = node
        }else if(index == this.size){
            
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }else{
            
            let curr = this.head
            let i = 0
            while(i<=index){
                
                if(i==index){
                    let prev = curr.prev
                    prev.next = node
                    node.prev = prev
                    node.next = curr
                    curr.prev = node
                }
                i++
                curr = curr.next
            }
        }
        this.size++
        return value
    }
}

const list1 = new DoubleLinkedList()

console.log(list1.unshift(4))
console.log(list1.unshift(3))
// console.log(list.shift())

list1.print()
console.log(list1)
list1.insert(9,1)
list1.print()