
// * queue in array method

class Queue{
    constructor(){
        this.item = []
    }
    enQueue(element){
        let value = this.item.push(element)
        return this
    }
    deQueue(){
        let value = this.item.shift()
        return value
    }
    isEmpty(){
        if(this.item.length){
            return false
        }else{
            return true
        }
    }
    size(){
        if(this.isEmpty()){
            return null
        }else{
            return this.size
        }
    }
    peak(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null
    }
    print(){
        return this.item
    }
}

const queue = new Queue()

// console.log(queue.enQueue(5))
// console.log(queue.enQueue(6))
// console.log(queue.deQueue())
// console.log(queue.isEmpty())
// console.log(queue.print())


// * queue object

class QueueObj{
    constructor(){
        this.item = {}
        this.rear = 0
        this.front = 0
    }
    enQueue(element){
        this.item[this.rear++]=element
        return this.item
    }
    deQueue(){
        let value = this.item[this.front]
        delete this.item[this.front++]
        return value
    }
    size(){
        return this.rear-this.front
    }
    peak(){
        if(this.size()){
            return this.item[this.front]
        }
        return undefined
    }
    print(){
        if(this.size()) return this.item

        return null
    }
}

const queueObj = new QueueObj()

console.log(queueObj.enQueue(9))
console.log(queueObj.enQueue(19))
console.log(queueObj.enQueue(29))
console.log(queueObj.deQueue())
console.log(queueObj.print())
console.log(queueObj.peak())
console.log(queueObj.size())