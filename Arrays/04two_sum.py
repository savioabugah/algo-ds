def two_sum(array, target_sum):
    mapping = {}
    result = []

    for number in array:
        alternate_number = target_sum - number
        if mapping.get(alternate_number):
            result.append((number, alternate_number))
        else:
            mapping[number] = True
    return result


print(two_sum([1, 2, 4, 5, 6, 7, 9, 11], 12))
