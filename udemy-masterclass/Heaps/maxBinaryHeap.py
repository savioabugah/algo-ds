class MaxBinaryHeap:
    def __init__(self):
        self.heap_values = [70, 40, 21, 3, 1, 5]
        self.size = 6

    def insert(self, val):
        self.size += 1
        self.heap_values.append(val)
        self.shift_up(self.size - 1)

    def extract_max(self):
        maximum = self.heap_values[0]
        self.size -= 1
        self.heap_values[0] = self.heap_values[self.size]
        self.heap_values.pop()
        self.shift_down(0)
        return maximum

    def shift_down(self, index):
        left = index * 2 + 1
        right = index * 2 + 2
        largest = index

        if left < self.size and self.heap_values[left] >= self.heap_values[largest]:
            largest = left

        if right < self.size and self.heap_values[right] >= self.heap_values[largest]:
            largest = right

        if largest != index:
            temp = self.heap_values[index]
            self.heap_values[index] = self.heap_values[largest]
            self.heap_values[largest] = temp
            self.shift_down(largest)

    def shift_up(self, index):
        if index > 0:
            parent = index // 2
            if self.heap_values[parent] < self.heap_values[index]:
                temp = self.heap_values[parent]
                self.heap_values[parent] = self.heap_values[index]
                self.heap_values[index] = temp
                self.shift_up(parent)


mbh = MaxBinaryHeap()
mbh.insert(100)
mbh.insert(200)
mbh.insert(50)
mbh.extract_max()
mbh.extract_max()
mbh.extract_max()
print(mbh.heap_values)
