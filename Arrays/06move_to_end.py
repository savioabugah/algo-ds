def moveElementToEnd(array, toMove):
    left = 0
    right = len(array) - 1

    while left < right:
        leftNumber = array[left]
        rightNumber = array[right]

        if leftNumber == toMove and rightNumber != toMove:
            array[right] = leftNumber
            array[left] = rightNumber
            left += 1
            right -= 1
        elif leftNumber != toMove:
            left += 1
        elif rightNumber == toMove:
            right -= 1
    return array

print(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))

