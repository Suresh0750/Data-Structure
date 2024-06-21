


class graph{
    constructor(){
        this.adjastant = {}
    }
    
    addVertax(vertax){
        if(!this.adjastant[vertax]){
            this.adjastant[vertax] = []
        }
    }
    addEdges(vertax,vertax1,weigt){
        
        if(!this.adjastant[vertax]){
            this.addVertax(vertax)
        }
        if(!this.adjastant[vertax1]){
            this.addVertax(vertax1)
        }
        this.adjastant[vertax].push({node:vertax1,weigt})
        this.adjastant[vertax1].push({node:vertax,weigt})
    }
}

const g = new graph()
g.addEdges('suresh','pranav',3)
console.log(g)

