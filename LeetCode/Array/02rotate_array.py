def rotate(arr, k):
    i = 0

    while i < k:
        prev = arr[len(arr) - 1]
        for j in range(len(arr)):
            temp = arr[j]
            arr[j] = prev
            prev = temp
        print(arr)
        i += 1

    return arr


print(rotate([1,2,3,4,5], 2))
