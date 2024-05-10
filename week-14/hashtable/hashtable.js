
// * open hashing and its called separate chaining

class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){

        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }

        return total%this.size
    }
    set(key,value){

        let index = this.hash(key)

        let bucket = this.table[index]

        if(bucket){
            let searchVal = bucket.find(item=> item[0]==key)

            if(searchVal){
                
                searchVal[1] = value
            }else{
                bucket.push([key,value])
            }
        }else{
            this.table[index] = [[key,value]]
        }
    }

    get(key){
        let index = this.hash(key)

        let bucket = this.table[index]

        if(bucket){
            let searchVal = bucket.find(item=> item[0]==key)

            if(searchVal){
                return searchVal[1]
            }else{
                return  -1
            }

        }else{
            return -1
        }
    }
    remove(key){
        let index = this.hash(key)

        let bucket = this.table[index]

        if(bucket){
            let searchVal= bucket.find(item=> item[0]==key)

            if(searchVal){
                bucket.splice(bucket.indexOf(searchVal),1)
            }
        }
    }
    print(){
        if(this.table.length==0) return console.log(`table is empty`)

        for(let i=0;i<this.table.length;i++){

            if(this.table[i]) console.log(this.table[i])
            
        }

    }
}


// const table = new Hashtable(4)


// table.set("name","suresh")
// table.set("name","suresh")
// table.set("name","suresh")
// table.set("name","suresh")
// table.set("name","suresh")

// * closed hashing

class closeHashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    linear(index){

        while(index<this.size){

            if(this.table[index]==undefined) return index

            index++
        }
        return -1
    }
    hash(key){

        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        let index = total%this.size

        return this.linear(index)
    }
    set(key,value){

        let index = this.hash(key)

        if(index==-1) return console.log(`key hash is failed`)
        
        this.table[index] = value
        return value
    }

    get(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }

        let index = total%this.size

        for(let index;index<this.size;index++){

            if(this.table[index][0]==key){
               return console.log(this.table[index][0],this.table[index][1])
                
            }
        }

        return console.log(-1)
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            
            if(this.table[i]) console.log(this.table[i])
        }
    }
}


const closeHash = new closeHashtable(5)

console.log(closeHash.set('name',"suresh"))
console.log(closeHash.set('name',"pranav"))
console.log(closeHash.set('name',"riyas"))
console.log(closeHash.set('name',"liston"))
console.log(closeHash.set('name',"madhav"))
closeHash.print()
