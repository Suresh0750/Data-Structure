class Node{
    constructor(){
     this.children = {}
     this.iswordEnd = false   
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let  childToInsert = word[i]
                if(!(childToInsert in curr.children)){
                    curr.children[childToInsert] = new Node()
                }
                curr = curr.children[childToInsert]
        }
        curr.iswordEnd = true
    }
    search(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let childTofind = word[i]
            if(!(childTofind in curr.children)){
                return false
            }
            curr = curr.children[childTofind]
        }

        return curr.iswordEnd
    }
    prefix(){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let childTofind = word[i]
            if(!(childTofind in curr.children)){
                return false
            }
        }
        return true
        
    }
}


const t = new Trie()

t.insert('kiran')

console.log(t.root)
console.log(t.search('kiran'))