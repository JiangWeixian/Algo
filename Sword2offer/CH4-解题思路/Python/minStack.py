class Stack:
  def __init__(self):
    self.items = []

  def append(self, value):
    self.items.append(value)

  def pop(self):
    return self.items.pop()

  def isEmpty(self):
    return len(self.items) == 0

class MinStack(Stack):
  def __init__(self):
    super(MinStack, self).__init__()
    self.min_items = []

  def append(self, value):
    super().append(value)
    if len(self.min_items) == 0:
      self.min_items.append(value)
    else:
      if value <= self.min_items[-1]:
        self.min_items.append(value)

  def pop(self):
    if not super().isEmpty():
      pop_item = super().pop()
      if pop_item <= self.min_items[-1]:
        self.min_items.pop()
      return pop_item
    return None

  def min(self):
    return self.min_items[-1]

if __name__ == '__main__':
  min_stack = MinStack()
  min_stack.append(4)
  min_stack.append(2)
  min_stack.append(5)
  min_stack.append(1)
  min_stack.append(3)
  print('min', min_stack.min())
  print('pop', min_stack.pop())
  print('min', min_stack.min())
  print('pop', min_stack.pop())
  print('min', min_stack.min())
  print('pop', min_stack.pop())
  print('min', min_stack.min())
  print('pop', min_stack.pop())