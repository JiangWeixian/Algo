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

  def show(self):
    current = self.head
    while current:
      print(current.value)
      current = current.next
  
  def __recurivse_reverse(self, node):
    if node:
      if node.next:
        next_node = self.__recurivse_reverse(node.next)
        next_node.next = node
      else:
        self.head = node
      return node

  def reverse(self):
    if not self.head:
      return
    tail = self.__recurivse_reverse(self.head)
    tail.next = None


if __name__ == '__main__':
  linkedList = LinkedList()
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
  linkedList.append(4)
  linkedList.reverse()
  linkedList.show()