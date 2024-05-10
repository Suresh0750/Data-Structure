


class Graph{
    constructor(){
        this.adjastanList ={}
    }

    addVertax(vertax){

        if(!this.adjastanList[vertax]){
            this.adjastanList[vertax] = []
        }
    }
    addEdges(vertax1,vertax2){
        if(this.adjastanList[vertax1]){
            this.adjastanList[vertax1].push(vertax2)
        }else{
            this.addVertax(vertax1)
            this.adjastanList[vertax1].push(vertax2)
        }
        if(this.adjastanList[vertax2]){
            this.adjastanList[vertax2].push(vertax1)
        }else{
            this.addVertax(vertax2)
            this.adjastanList[vertax2].push(vertax1)
        }
    }
    BFS(node){
        if(!node || !this.adjastanList[node]) return null

        let queue = []
        let data = []
        let visited = {}
        queue.push(node)
        visited[node] = true

        while(queue.length){
            let vertax = queue.shift()
            data.push(vertax)

            for(let v of this.adjastanList[vertax]){

                if(!visited[v]){
                    queue.push(v)
                    visited[v] = true
                }
            }
        }
        console.log(data)
        return data
    }
}

const g =new Graph()

g.addVertax('madhav')
g.addVertax('pranav')
g.addVertax('hunesh')
g.addEdges('madhav','pranav')
g.addEdges('pranav','madhav')
g.addEdges('hunesh','pranav')
console.log(g.adjastanList)

console.log(g.BFS('madhav'))