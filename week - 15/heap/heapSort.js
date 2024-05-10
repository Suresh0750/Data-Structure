

class minHeap{
    constructor(){
        this.heap=[]
    }
    insert(val){
        this.heap.push(val)
        let index = this.heap.length-1
        let parentInd
        while(index>0){
            parentInd = Math.floor((index-1)/2)
            
            if(this.heap[parentInd]<this.heap[index]) return
            this.heap[index] = this.heap[parentInd]
            this.heap[parentInd] = val
            index = parentInd
        }
    }
    heapSort(){
        let data = []
        
        while(this.heap.length){
            data.push(this.extractMin())
        }
        return data
    }
    extractMin(){
        let removed = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        let index = 0
        this.heap.pop()
        if(!this.heap.length) return removed
        
        let left,right,smallest = index,length = this.heap.length
        while(true){
           left = (2*index)+1
           right = (2*index)+2
           if(left<length){
               smallest = left
           }
           if(right<length && this.heap[right]<this.heap[smallest]){
               smallest = right
           }
           if(this.heap[index]>this.heap[smallest]){
               let temp = this.heap[index]
               this.heap[index] = this.heap[smallest]
               this.heap[smallest] = temp
               index = smallest
           }else{
               break;
           }
        }
        return removed
    }
}
const h = new minHeap()
h.insert(8)
h.insert(23)
h.insert(14)
h.insert(21)
h.insert(4)
h.insert(3)
console.log(h)
console.log(h.extractMin())
console.log(h)
console.log(h.heapSort())
