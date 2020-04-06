def add_binary(one, two):
    carry = 0
    n = max(len(one), len(two))
    one, two = one.zfill(n), two.zfill(n)
    answer = []

    for i in range(n, -1, -1):
        if one[i] == '1':
            carry += 1

        if two[i] == '1':
            carry += 1

        if carry % 2 == 1:
            answer.append(1)
        else:
            answer.append(0)

        carry //= 2

    if carry:
        answer.append(1)

    answer.reverse()

    return ''.join(answer)

