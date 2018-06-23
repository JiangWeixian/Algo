def exchange(arr):
  if type(arr) != list or len(arr) == 0 or len(arr) == 1:
    return arr
  start = 0
  end = len(arr) - 1
  while start <= end:
    while is_odd(arr[start]):
      start += 1
    while is_even(arr[end]):
      end -= 1
    if start <= end:
      tmp = arr[start]
      arr[start] = arr[end]
      arr[end] = tmp
      start = start + 1
      end = end - 1

def is_odd(num):
  return num % 2 != 0

def is_even(num):
  return num % 2 == 0

array = [1, 2, 5, 7, 8, 4]
exchange(array)
print(array)
array = [2, 2, 2, 1, 1, 1]
exchange(array)
print(array)
