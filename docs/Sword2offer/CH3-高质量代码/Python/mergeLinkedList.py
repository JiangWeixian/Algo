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

  def merge(self, list_a, list_b):
    if list_a == None and list_b == None:
      return
    if list_a == None and not list_b:
      head = list_b
      return
    if not list_a and list_b == None:
      head = list_a
      return
    current_a = list_a
    current_b = list_b
    current = None
    head = None
    while current_a and current_b:
      if current:
        print(current.value)
      if current_a.value < current_b.value:
        if not head:
          head = current_a
          current = head
        else:
          current.next = current_a
          current = current.next
        current_a = current_a.next
      else:
        if not head:
          head = current_b
          current = head
        else:
          current.next = current_b
          current = current.next
        current_b = current_b.next

    if current_a:
      current.next = current_a
      current_a = current_a.next

    if current_b:
      current.next = current_b
      current_b = current_b.next

    return


if __name__ == '__main__':
  linkedListA = LinkedList()
  linkedListA.append(1)
  linkedListA.append(3)
  linkedListA.append(5)
  linkedListA.append(7)
  linkedListB = LinkedList()
  linkedListB.append(2)
  linkedListB.append(4)
  linkedListB.append(6)
  linkedListB.append(8)
  linkedList = LinkedList()
  linkedList.merge(linkedListA.head, linkedListB.head)
  linkedList.show()
