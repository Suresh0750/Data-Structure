
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BTree{
    constructor(){
        this.root = null
    }

    insert(val){
        const node = new Node(val)
        if(!this.root){
            this.root = node
            return this
        }

        let curr = this.root

        while(true){
            if(curr.value==val){
                return -1
            }else if(val<curr.value){

                if(!curr.left){
                    curr.left = node
                    return this
                }
                curr = curr.left
            }else{
                if(!curr.right){
                    curr.right = node
                    return this
                }
                curr = curr.right
            }
        }
    }

    find(val){

        if(!this.root) return -1

        let curr = this.root
        while(curr){
            if(val<curr.value){
                curr = curr.left
            }else if(val>curr.value){
                curr = curr.right
            }else{
                return true
            }
        }

        return false
    }
    BFS(){
        let queue = []
        let visited = []
        queue.push(this.root)
        let valNode
        while(queue.length){
            valNode = queue.shift()
            visited.push(valNode.value)
            if(valNode.left) queue.push(valNode.left)
            if(valNode.right) queue.push(valNode.right)
        }

        return visited
    }
    DFSPreorder(){

        let data = []
        function recursive(node){
            data.push(node.value)
            if(node.left) recursive(node.left)
            if(node.right) recursive(node.right)
        }
        recursive(this.root)

        return data
    }
    DFSPostorder(){
        let data = []

        function recursive(node){

            if(node.left) recursive(node.left)
            if(node.right) recursive(node.right)
            data.push(node.value)
        }
        recursive(this.root)
        return data
    }
}

const tree = new BTree()

tree.insert(5)
tree.insert(4)
tree.insert(7)
tree.insert(3)

// tree.find(4))

tree.find(43)
// console.log(tree.find(7))
// console.log(tree.find(14))1

// console.log(tree.BFS())

// console.log(tree.DFSPreorder())
// console.log(tree.DFSPostorder())