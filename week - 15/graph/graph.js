
class Graph{
    constructor(){
        this.adjastency = {}
    }
    addVertax(val){
        if(!this.adjastency[val]){
            this.adjastency[val] = []
        }
    }
    addedges(vertax1,vertax2){
        
        if(this.adjastency[vertax1]){
            this.adjastency[vertax1].push(vertax2)
        }else{
            this.adjastency[vertax1] = [vertax2]
        }
        
        if(this.adjastency[vertax2]){
            this.adjastency[vertax2].push(vertax1)
        }else{
            this.adjastency[vertax2] = [vertax1]
        }
    }
    removeEdges(vertax1,vertax2){
        
        if(this.adjastency[vertax1]){
            this.adjastency[vertax1] = this.adjastency[vertax1].filter((v)=>{ v!==vertax2})
        }
        if(this.adjastency[vertax2]){
            this.adjastency[vertax2] = this.adjastency[vertax2].filter((v)=>{
                v!==vertax1
            })
        }
    }
    removeVertex(vertex){
        if(this.adjastency[vertex]){
            while(this.adjastency[vertex].length){
                this.removeEdges(vertex,this.adjastency[vertex][0])
            }
            delete this.adjastency[vertex]
        }
    }
}


const g = new Graph()

g.addVertax('pranav')
g.addedges('suresh','hunesh')
g.addedges('pranav','suresh')
g.addedges('hunesh','suresh')
// g.removeEdges('hunesh','suresh')
g.removeVertex('suresh')
console.log(g.adjastency)



