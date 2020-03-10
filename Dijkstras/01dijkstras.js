class Node {
    constructor (val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor() {
        this.nodes = []
    }

    enqueue(node) {
        this.nodes.push(node);
        this.sort();
    }

    dequeue() {
        return this.nodes.shift();
    }

    sort() {
        this.nodes.sort((a, b) => a.priority - b.priority)
    }

}



class WeightedGraph {
    constructor() {
        this.adjacencyList = []
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];

        // Build up initial state

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        // As long as there is something on the pQ.
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // We are done
                while (smallest) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
                for ( let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }

        }
        console.log(path);
    }

}


let wg = new WeightedGraph();
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")
wg.addVertex("D")
wg.addVertex("E")
wg.addVertex("F")

wg.addEdge("A", "B", 4)
wg.addEdge("A", "C", 2)
wg.addEdge("C", "F", 4)
wg.addEdge("F", "E", 1)
wg.addEdge("F", "D", 1)
wg.addEdge("C", "B", 2)
wg.addEdge("B", "E", 3)
wg.addEdge("D", "E", 3)

console.log(wg.adjacencyList)
wg.dijkstra("A", "E")
