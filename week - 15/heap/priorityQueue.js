

class Node{
    constructor(val,priority){
        this.val = val
        this.priority = priority
    }
}

class priority{
    constructor(){
        this.heap = []
    }
    enqueue(val,priority){
        const node = new Node(val,priority)
        
        this.heap.push(node)
        if(this.heap.length>1){
            
            this.shiftUP()
        }
        return this.heap
    }
    shiftUP(){
        let index = this.heap.length-1
        let parentInd = Math.floor((index-1)/2)
        
        while(parentInd>=0 && this.heap[parentInd].priority>this.heap[index].priority){
            this.swap(this.heap,parentInd,index)
            index = parentInd
            parentInd = Math.floor((index-1)/2)
        }
        return this.heap
    }
    dequeue(){
        let removed = this.heap[0]
        this.heap[0] = this.heap.pop()
        
        
        if(this.heap.length>1){
            this.shifDown()
        }
    }
    shifDown(){
        let index = 0
        let removed = this.heap[0]
        this.heap[0] = this.heap.pop()
        let left = (2*index)+1
        let length  = this.heap.length,smallest,right
        while(true){
            if(left<length){
                smallest = left
            }
            right = (2*index)+2
            if(right<length && this.heap[smallest].priority>this.heap[right].priority){
                smallest = right
            }
            if(this.heap[index].priority>this.heap[smallest].priority){
                this.swap(this.heap,index,smallest)
                index = smallest
            }else{
                break;
            }
        }
        return removed
    }
    swap(arr,i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

const heap = new priority()

heap.enqueue(4,2)
heap.enqueue(14,12)
heap.enqueue(43,21)
heap.enqueue(41,4)

console.log(heap.enqueue(41,14))
console.log(heap.shifDown())
console.log(heap.heap)