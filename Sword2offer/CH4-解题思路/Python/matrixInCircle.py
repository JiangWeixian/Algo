def print_matrix(arr, callback):
  if type(arr) != list or len(arr) == 0:
    return
  start = 0
  rows = len(arr)
  cols = len(arr[0])
  while rows >= 2 * start and cols >= 2 * start:
    print_matrix_in_circle(arr, start, rows - 2 * start, cols - 2 * start, callback)
    start += 1

def print_matrix_in_circle(circle, start, rows, cols, callback):
  rowStart = start
  colStart = start
  rowEnd = start + rows
  colEnd = start + cols
  if cols > 1:
    print_l2r(circle, colStart, colStart, colEnd - 1, callback)
  if rows >=1:
    print_t2b(circle, colEnd - 1, rowStart, rowEnd - 1, callback)
  if cols >= 1 and rows > 1:
    print_r2l(circle, rowEnd - 1, colEnd - 1, colStart, callback)
  if rows > 1 and cols > 1:
    print_b2t(circle, colStart, rowEnd - 1, rowStart, callback)


def print_l2r(circle, row, start, end, callback):
  if start == end:
    callback(circle[row][start])
  for i in range(start, end):
    callback(circle[row][i])

def print_t2b(circle, col, start, end, callback):
  if start == end:
    callback(circle[start][col])
  for i in range(start, end):
    callback(circle[i][col])

def print_r2l(circle, row, start, end, callback):
  if start == end:
    callback(circle[row][start])
  for i in range(start, end, -1):
    callback(circle[row][i])

def print_b2t(circle, col, start, end, callback):
  if start == end:
    callback(circle[start][col])
  for i in range(start, end, -1):
    callback(circle[i][col])

if __name__ == '__main__':
  def show(value):
    print(value)
  print('rect')
  rect = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
  print_matrix(rect, show)
  print('onerow')
  onerow = [[1, 2, 3, 4]]
  print_matrix(onerow, show)
  print('onecol')
  onecol = [[1], [2], [3], [4]]
  print_matrix(onecol, show)
  print('unrect')
  unrect = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
  print_matrix(unrect, show)