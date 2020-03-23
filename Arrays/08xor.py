# Given an array of integers. Find the pair in an array which has minimum XOR value.
# https://www.geeksforgeeks.org/minimum-xor-value-pair/

def minimum_xor(arr):
    minimum = float('inf')
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            minimum = min(arr[i] ^ arr[j], minimum)
    return minimum

print(minimum_xor([9, 5, 3]))

# More efficient
def minimum_xor(arr):
    # arr.sort()
    i = 0
    j = 1
    minimum = float('inf')

    while j < len(arr):
        minimum = min(arr[i] ^ arr[j], minimum)
        i += 1
        j += 1

    return minimum


print(minimum_xor([1, 2, 3, 4, 5]))


# Python3 Program to find maximum XOR
# value of a pair

# Utility function to check number of
# elements having set msb as of pattern
def checkBit(pattern,arr,  n) :
    count = 0
    print(pattern)

    for i in range(0, n) :
        if ((pattern & arr[i]) == pattern) :
            count = count + 1
    return count

# Function for finding maximum and
# value pair
def maxAND (arr,  n) :
    res = 0

    # iterate over total of 30bits
    # from msb to lsb
    for bit in range(31,-1,-1) :
        print(bit)

        # find the count of element
        # having set  msb
        count = checkBit(res | (1 << bit), arr, n)

        # if count >= 2 set particular
        # bit in result
        if ( count >= 2 ) :
            res =res | (1 << bit)

    return res


# Driver function
arr = [4, 8, 6, 2]
n = len(arr)
print("Maximum AND Value = ", maxAND(arr, n))


# Find largest element from array without using conditional operator


