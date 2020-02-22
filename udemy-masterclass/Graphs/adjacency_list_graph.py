class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_vertex(self, vertex):
        self.adjacency_list[vertex] = []

    def add_edge(self, vertex1, vertex2):
        self.adjacency_list[vertex1].push(vertex2)
        self.adjacency_list[vertex2].push(vertex1)

    def remove_edge(self, vertex1, vertex2):
        self.adjacency_list[vertex1] = filter(lambda v: v != vertex2, self.adjacency_list[vertex1])
        self.adjacency_list[vertex2] = filter(lambda v: v != vertex1, self.adjacency_list[vertex2])

    def remove_vertex(self, vertex):
        map(lambda v: self.remove_edge(v, vertex), self.adjacency_list[vertex])
        del self.adjacency_list[vertex]
