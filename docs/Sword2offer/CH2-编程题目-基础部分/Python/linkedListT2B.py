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
  
  def __reverse_print(self, root):
    if root:
      if root.next:
        self.__reverse_print(root.next)
      print(root.value)

  def reverse_print(self):
    if not self.head:
      print('it\'s empty')
    else:
      self.__reverse_print(self.head)

if __name__ == '__main__':
  linkedList = LinkedList()
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
  linkedList.append(4)
  linkedList.reverse_print()