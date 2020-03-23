class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def print_tree(self):
        print(self.value)

class BST:
    def __init__(self, value):
        self.value = None
        self.right = None
        self.left = None

    def insert(self, value):
        if self.value:
            if value < self.value:
                if self.left:
                    self.left.insert(value)
                else:
                    self.left = BST(value)
            elif value > self.value:
                if self.right:
                    self.right.insert(value)
                else:
                    self.right = BST(value)
        else:
            self.value = value

    def find_val(self, value):
        if value < self.value:
            if self.left:
                return self.left.find_val(value)
            else:
                return "Not found"
        elif value > self.value:
            if self.right:
                return self.right.find_val(value)
            else:
                return "Not found"
        else:
            return "FOUND"

    def find_closest(self, value):
        self.find_closest_value(value, )
        
    def print_tree(self):
        if self.left:
            self.left.print_tree()
        print(self.value)
        if self.right:
            self.right.print_tree()


tree = BST(12)
tree.insert(6)
tree.insert(14)
tree.insert(3)

tree.print_tree()
print(tree.find_closest(80))

