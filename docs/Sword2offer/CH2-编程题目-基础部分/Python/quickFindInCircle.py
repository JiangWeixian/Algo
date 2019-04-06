import math

def quick_find_min (arr):
  start = 0
  end = len(arr) - 1
  while start <= end:
    mid = math.floor((start + end) / 2)
    midValue = arr[mid]
    if midValue > arr[start]:
      start = mid + 1
    elif midValue < arr[end]:
      end = mid
    elif start != end and midValue == arr[start] and midValue == arr[end]:
      for i in range(start, end):
        if arr[i] > arr[i + 1]:
          return arr[i + 1]
    else:
      return midValue

arr = [3, 4, 5, 1, 2]
print(quick_find_min(arr))
arr = [1, 0, 1, 1, 1]
print(quick_find_min(arr))