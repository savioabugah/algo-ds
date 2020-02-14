import math
import itertools

def get_digit_at(num, position):
    return int(math.floor(abs(num) / math.pow(10, position)) % 10)

def get_digit_count(num):
    if num == 0: return 1
    return int(math.floor(math.log10(abs(num))) + 1)

def max_digit(arr):
    maximum = 0
    for num in arr:
        if get_digit_count(num) > maximum:
            maximum = get_digit_count(num)
    return maximum


def radix_sort(arr):
    for i in range(max_digit(arr)):
        buckets = [[] for _ in range(10)]
        for num in arr:
            buckets[get_digit_at(num, i)].append(num)
        arr = list(itertools.chain(*buckets))
    return arr

print(radix_sort([4, 3, 2, 4, 111]))
