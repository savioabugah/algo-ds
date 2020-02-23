class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_vertex(self, vertex):
        self.adjacency_list[vertex] = []

    def add_edge(self, vertex1, vertex2):
        self.adjacency_list[vertex1].append(vertex2)
        self.adjacency_list[vertex2].append(vertex1)

    def remove_edge(self, vertex1, vertex2):
        self.adjacency_list[vertex1] = filter(lambda v: v != vertex2, self.adjacency_list[vertex1])
        self.adjacency_list[vertex2] = filter(lambda v: v != vertex1, self.adjacency_list[vertex2])

    def remove_vertex(self, vertex):
        map(lambda v: self.remove_edge(v, vertex), self.adjacency_list[vertex])
        del self.adjacency_list[vertex]

    def dfs_recurse(self, vertex):
        result = []
        visited = {}

        def traverse(v):
            if not v: return;
            result.append(v)
            visited[v] = True
            for neighbor in self.adjacency_list[v]:
                print('**********')
                print(neighbor)
                print(self.adjacency_list[v])
                print('********')
                if not visited.get(neighbor):
                    traverse(neighbor)

        traverse(vertex)

        return result


g = Graph()
g.add_vertex("A")
g.add_vertex("B")
g.add_vertex("C")
g.add_vertex("D")
g.add_vertex("E")
g.add_vertex("F")

g.add_edge("A", "B")
g.add_edge("A", "C")
g.add_edge("B", "D")
g.add_edge("C", "E")
g.add_edge("D", "E")
g.add_edge("D", "F")
g.add_edge("E", "F")

print(g.dfs_recurse("A"))
