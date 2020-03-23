class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        currentNode = self
        while currentNode:
            if currentNode.value == value:
                break
            elif currentNode.value < value:
                if currentNode.right:
                    currentNode = currentNode.right
                else:
                    currentNode.right = BST(value)
                    break
            elif currentNode.value > value:
                if currentNode.left:
                    currentNode = currentNode.left
                else:
                    currentNode.left = BST(value)
                    break
        return self


    def remove(self, value, parentNode = None):
        currentNode = self
        while currentNode:
            if value < currentNode.value:
                parentNode = currentNode
                currentNode = currentNode.left
            elif value > currentNode.value:
                parentNode = currentNode
                currentNode = currentNode.left
            else:
                if currentNode.left and currentNode.right:
                    currentNode.value = currentNode.right.getMinValue()
                    currentNode.right.remove(currentNode.value, currentNode)
                elif parentNode.left == currentNode:
                    parentNode.left = currentNode.left if currentNode.left else currentNode.right
                elif parentNode.right == currentNode:
                    parentNode.right = currentNode.left if currentNode.left else  currentNode.right
