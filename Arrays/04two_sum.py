def two_sum(arr, target):
    arr.sort()
    i = 0
    j = len(arr) - 1
    result = []

    while i < j:
        total = arr[i] + arr[j]
        if total == target:
            result.append([arr[i], arr[j]])
            i += 1
            j -= 1
        elif total < target:
            i += 1
        elif total > target:
            j -= 1

    return result

# def two_sum(array, target_sum):
#     mapping = {}
#     result = []

#     for number in array:
#         alternate_number = target_sum - number
#         if mapping.get(alternate_number):
#             result.append((number, alternate_number))
#         else:
#             mapping[number] = True
#     return result


print(two_sum([1, 2, 4, 5, 6, 7, 9, 11], 12))
