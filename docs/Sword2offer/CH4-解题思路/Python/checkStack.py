class Stack:
  def __init__(self):
    self.items = []

  def append(self, value):
    self.items.append(value)

  def pop(self):
    return self.items.pop()

  def isEmpty(self):
    return len(self.items) == 0

  def top(self):
    return self.items[-1]


def check(inPath, outPath):
  stack = Stack()
  in_index = 0
  out_index = 0
  while in_index < len(inPath):
    stack.append(inPath[in_index])
    if stack.top() == outPath[out_index]:
      stack.pop()
      out_index += 1
    in_index += 1
  while not stack.isEmpty():
    if stack.top() != outPath[out_index]:
      return False
    else:
      stack.pop()
      out_index += 1
  return True

if __name__ == '__main__':
  in_arr = [1, 2, 3, 4, 5]
  out_arr = [4, 5, 3, 2, 1]
  out_arr2 = [4, 3, 5, 1, 2]
  print(check(in_arr, out_arr))
  print(check(in_arr, out_arr2))