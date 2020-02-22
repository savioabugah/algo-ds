class MinBinaryHeap:
    def __init__(self):
        self.heap_values = [2, 4, 5]
        self.size = 3

    def insert(self, val):
        self.heap_values.append(val)
        self.size += 1
        self.shift_up(self.size - 1)

    def shift_up(self, index):
        if index > 0:
            val = self.heap_values[index]
            parent = index // 2

            if self.heap_values[parent] > self.heap_values[index]:
                self.heap_values[index] = self.heap_values[parent]
                self.heap_values[parent] = val
                self.shift_up(parent)

mbh = MinBinaryHeap()
mbh.insert(1)
print(mbh.heap_values)
