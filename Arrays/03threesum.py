def three_sum():
    arr = [-3, -1, 1, 0, 2, 10, -2, 8]
    #arr.sort()
    three_sums = []

    for i in range(len(arr) - 2):
        left = i + 1
        right = len(arr) - 1
        while(left < right):
            total = arr[i] + arr[left] + arr[right]
            if (total == 0):
                three_sums.append((arr[i], arr[left], arr[right]))
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            elif total > 0:
                right -= 1
    print(three_sums)

if __name__ == "__main__":
    three_sum()
