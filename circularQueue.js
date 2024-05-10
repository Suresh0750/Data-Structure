class CircularQueue{
    constructor(size){
        this.arr = new Array(size)
        this.size = size
        this.curLength = 0
        this.rear = -1
        this.front = -1
    }
    isEmpty(){
        return this.curLength == 0
    }
    isFull(){
        return this.curLength == this.size
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.size
            this.arr[this.rear]=element
            this.curLength+=1
            if(this.front==-1){
                this.front = this.rear
            }
            return element
        }
        return undefined
    }
    dequeue(){
        if(!this.isEmpty()){
            this.front = (this.front)%this.size
            let val = this.arr[this.front]
            this.arr[this.front] = null
            this.front++
            this.curLength--
            if(!this.curLength){
                this.front = -1
                this.rear = -1
            }
            return val
        }
        return undefined
    }
    getSize(){
        return this.curLength
    }
    print(){
        if(!this.isEmpty()){
            let i = 0
            let res = ""
            while(i!==this.rear+1){
                res += this.arr[i]+ " "
                i++
            }
            return console.log(res)
        }
        return console.log(`queue is empty`)
    }
}

const list = new CircularQueue(4)

console.log(list.enqueue(9));
list.enqueue(19)
list.enqueue(29)
list.enqueue(39)

list.print()
console.log(list.dequeue())
list.print()
list.enqueue(10)
list.print()
console.log(list)