class Node:
    def __init__(self, val, priority):
        self.val = val
        self.priority = priority


class PriorityQueue:
    def __init__(self):
        self.size = 5
        self.nodes = [Node('one', 3), Node('two', 4), Node('three', 5), Node('four', 6), Node('tree', 7),]

    def enqueue(self, new_node):
        self.nodes.append(new_node)
        self.size += 1
        self._shift_up(self.size - 1)

    def dequeue(self):
        highest_priority = self.nodes[0]
        self.nodes[0] = self.nodes[self.size - 1]
        self.nodes.pop()
        self.size -= 1
        self._shift_down(0)
        return highest_priority;

    def _shift_down(self, index):
        left = index * 2 + 1
        right = index * 2 + 2

        lowest_priority = index
        if left < self.size and self.nodes[left].priority <= self.nodes[lowest_priority].priority:
            lowest_priority = left

        if right < self.size and self.nodes[right].priority <= self.nodes[lowest_priority].priority:
            lowest_priority = right

        if lowest_priority != index:
            temp = self.nodes[index]
            self.nodes[index] = self.nodes[lowest_priority]
            self.nodes[lowest_priority] = temp
            self._shift_down(lowest_priority)

    def _shift_up(self, index):
        if index > 0:
            parent = index // 2
            if self.nodes[parent].priority > self.nodes[index].priority:
                temp = self.nodes[index]
                self.nodes[index] = self.nodes[parent]
                self.nodes[parent] = temp
                self._shift_up(parent)

    def print(self):
        for p in self.nodes:
            print(p.priority, end='->')



pq = PriorityQueue()
pq.enqueue(Node('#', 2))
pq.enqueue(Node('#', 9))
pq.print()
print('\n*********')
print(pq.dequeue().priority)
print('*******')
print(pq.dequeue().priority)
pq.print()
