
def rotate(matrix):
    size = len(matrix) - 1
    spiral = []
    for layer in range(0, len(matrix) // 2):
        for i in range(layer, size - layer):
            print(layer, i)
            top_fence = matrix[layer][i]
            right_fence = matrix[i][size - layer]
            bottom_fence = matrix[size - layer][size - i]
            left_fence = matrix[size - i][layer]
            spiral.append(top_fence)
            spiral.append(right_fence)
            spiral.append(bottom_fence)
            spiral.append(left_fence)

            matrix[layer][i] = left_fence
            matrix[i][size - layer] = top_fence
            matrix[size - layer][size - i] = right_fence
            matrix[size - i][layer] = bottom_fence
    print(spiral)
    return matrix

print(rotate([
  [ 1,  2,  3, 4],
  [ 5,  6,  7, 8],
  [ 9, 10, 11, 12],
  [13, 14, 15, 16]
],
))
