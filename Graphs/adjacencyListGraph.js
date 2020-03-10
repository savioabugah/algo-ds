class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }

    removeVertex(vertex){
        this.adjacencyList[vertex].map(v => this.removeEdge(v, vertex));
        delete this.adjacencyList[vertex]
    }

    dfs(vertex) {
        let result = []
        let visited = {}
        let adjacencyList = this.adjacencyList;

        (function traverse(vertex) {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].map(v => {
                if (Object.keys(visited).indexOf(v) === -1) {
                    traverse(v);
                }
            })
        })(vertex);

        return result;
    }

    dfsIter(vertex) {
        let stack = [vertex];
        let current;
        let visited = {}
        let result = []
        visited[vertex] = true;

        while (stack.length) {
            current = stack.pop();
            result.push(current);
            this.adjacencyList[current].forEach(v => {
                if (!visited[v]) {
                    visited[v] = true;
                    stack.push(v)
                }
            })
        }
        return result;
    }

    bfsIter(vertex) {
        const result = [];
        const visited = {};
        const queue = [];
        queue.push(vertex);
        visited[vertex] = true;
        let current;

        while(queue.length){
            current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach(neighbour =>{
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour)
                }
            })
        }
        return result;
    }
}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.dfs("A"))
console.log(g.dfsIter("A"))
console.log(g.bfsIter("A"))
