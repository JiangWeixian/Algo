def split_lr(arr):
  root = arr[-1]
  for i in range(len(arr)):
    if arr[i] > root:
      return i

def is_bst(arr):
  root = arr[-1]
  if arr[0] < root and arr[1] > root:
    return True
  return False

def recurvise_check(arr):
  result = False
  if len(arr) > 3:
    mid = split_lr(arr)
    if mid > 0:
      result = recurvise_check(arr[0:mid])
      if not result:
        return result
    if mid < len(arr):
      result = recurvise_check(arr[mid:-1])
      if not result:
        return result
  if len(arr) == 3:
    result = is_bst(arr)
    return result
  if len(arr) < 3:
    return True
  return result

def check(arr):
  if type(arr) != list or len(arr) < 2:
    return True
  return recurvise_check(arr)

if __name__ == '__main__':
  arr = [5, 7, 6, 9, 11, 10, 8]
  print(check(arr))
  arr = [7, 4, 6, 5]
  print(check(arr))
  arr = [4, 7, 6]
  print(check(arr))