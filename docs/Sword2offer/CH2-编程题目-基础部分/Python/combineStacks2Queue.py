class Stack:
  def __init__(self):
    self.__items = []
    self.__length = 0
  
  def append(self, value):
    self.__items.append(value)
    self.__length += 1
  
  def pop(self):
    if not self.is_empty():
      value = self.__items.pop()
      self.__length -= 1
      return value
    return None
  
  def is_empty(self):
    return self.__length == 0

  def test(self):
    return self.__items

class Queue:
  def __init__(self):
    self.__in = Stack()
    self.__out = Stack()
  
  def append(self, value):
    self.__in.append(value)
  
  def shift(self):
    self.__make_stackout()
    if not self.__out.is_empty():
      return self.__out.pop()
    return None

  def __make_stackout(self):
    if self.__out.is_empty():
      while not self.__in.is_empty():
        self.__out.append(self.__in.pop())

if __name__ == '__main__':
  queue = Queue()
  queue.append('a')
  queue.append('b')
  queue.append('c')
  print(queue.shift())
  print(queue.shift())
  queue.append('d')
  print(queue.shift())
  print(queue.shift())