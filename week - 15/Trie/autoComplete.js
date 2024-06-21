

class Node{
    constructor(){
        this.children = {}
        this.wordEnd = false
    }
}

class Trie{
    constructor(){
       this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let inWord = word[i]
            if(!(inWord in curr.children)){
                curr.children[inWord] = new Node()
            }
            curr = curr.children[inWord]
        }
        curr.wordEnd = true
    }
    search(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            
            if(!(word[i] in curr.children)){
                return false
            }
            curr = curr.children[word[i]]
        }
        return curr.wordEnd
    }
    prefix(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let inVal = word[i]
            if(!(word[i] in curr.children)){
                return false
            }
            curr = curr.children[word[i]]
        }
        return true
    }
    print(node = this.root,word="",result=[]){

        if(node.wordEnd){
            result.push(word)
        }
        for(let key in node.children){
            this.print(node.children[key],word+key,result)
        }
        return result
    }
    autoComplete(word){
        let node = this.root
        for(let i=0;i<word.length;i++){
            if(!(word[i] in node.children)){
                return []
            }
            node = node.children[word[i]]
        }
        let list = []
        this.print(node,word,list)
        return list
    }
}

const t = new Trie()
t.insert('madhav')
t.insert('mathan')
console.log(t.search('madhavj'))
console.log(t.prefix('ma'))
console.log(t)
console.log(t.print())
console.log(t.autoComplete('mat'))
