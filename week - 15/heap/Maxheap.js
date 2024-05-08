
let arr = [4,3,4,9,6,3,8]
class maxheap{
    constructor(){
        this.heap = []
    }
    insert(val){
        this.heap.push(val)
        let ind = this.heap.length-1
        let parentInd
        while(ind>0){
            parentInd = Math.floor((ind-1)/2)
            if(this.heap[ind]<this.heap[parentInd]) return 
            this.heap[ind] = this.heap[parentInd]
            this.heap[parentInd] = val
            ind = parentInd
        }
        return this
    }
    heapDown(){
        let length = this.heap.length
        let removed = this.heap[length-1]
        this.heap[0] = this.heap.pop()
        
        let ind = 0
        
        while(true){
            let left = (2*ind)+1
            let right = (2*ind)+2
            let largest;
            if(left<length){
                largest = left
            }
            
            if(right<length && this.heap[right]>this.heap[largest]){
                largest = right
            }
            if(this.heap[ind]<this.heap[largest]){
                this.swap(ind,largest)
            }else{
                break;
            }
        }
        return removed
    }
    swap(i,j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }
}



const heap = new maxheap()
let i = 0

while(i<arr.length){
    heap.insert(arr[i])
    i++
}
console.log(heap)

heap.heapDown()
console.log(heap)

