def test():
    arr = [-20, -1, 5, 6, 20, 30]

    left = 0
    right = len(arr) - 1

    while left < right:
        total = arr[left] + arr[right]
        if total == 11:
            print(arr[left], arr[right])
            left += 1
            right += 1
        elif total < 11:
            left += 1
        elif total > 11:
            right -= 1


if __name__ == "__main__":
    test()


# def test():
#     arr = [-1, 0, 1, 2, -1, 4, -4]

#     m = {}
#     zeroSum = []

#     for index, value in enumerate(arr):
#         if  m.get(-value):
#             zeroSum.append((value, -value))
#         m[value] = index

#     print(zeroSum)
