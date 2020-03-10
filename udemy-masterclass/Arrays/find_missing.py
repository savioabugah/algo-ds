def find_missing(arr1, arr2):
    items = {}
    for item in arr2:
        items[item] = True

    for item in arr1:
        if not items.get(item):
            print(item)


find_missing([4, 12, 9, 5, 6], [4, 12, 5, 6])
