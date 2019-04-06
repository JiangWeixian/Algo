def quickSearch (arr, target):
  rows = len(arr)
  cols = len(arr[0])
  start = 0
  end = cols - 1
  while start < rows and end > -1:
    if arr[start][end] > target:
      end -= 1
    elif arr[start][end] < target:
      start += 1
    else:
      return True  

arr = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]]

print(quickSearch(arr, 2))
