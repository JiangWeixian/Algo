class Item:
  def __init__(self, value):
    self.value = value
    self.next = None

class LinkedList: 
  def __init__(self):
    self.head = None
  
  def append(self, value):
    if self.head == None:
      self.head = Item(value)
    else:
      item = Item(value)
      current = self.head
      while current.next:
        current = current.next
      current.next = item
  
  def last_k(self, k):
    if self.head == None:
      return None
    start = self.head
    end = self.head
    for i in range(k):
      end = end.next
      if end == None and i != k - 1:
        return None
    while end:
      start = start.next
      end = end.next
    return start

if __name__ == '__main__':
  linkedList = LinkedList()
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
  linkedList.append(4)
  print(linkedList.last_k(5))
  print(linkedList.last_k(4).value)
  print(linkedList.last_k(2).value)
  print(linkedList.last_k(1).value)
