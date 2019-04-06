class Node:
  def __init__(self, value):
    self.value = value
    self.next = None
    self.slibing = None

class LinkedList:
  def __init__(self, *args, **kwargs):
    self.head = None
  
  def show(self):
    current = self.head
    while current:
      print('current', current.value)
      if current.slibing:
        print('slibing', current.slibing.value)
      current = current.next

def copy(listA, listB):
  current = listA.head
  while current:
    cloneNode = Node(current.value)
    nextNode = current.next
    current.next = cloneNode
    cloneNode.next = nextNode
    current = current.next.next
  
  current = listA.head
  while current:
    if current.slibing:
      cloneSlibNode = current.slibing.next
      cloneNode = current.next
      cloneNode.slibing = cloneSlibNode.next
    current = current.next.next
  
  current = listA.head
  listB.head = current.next
  while current:
    cloneNode = current.next
    nextNode = cloneNode.next
    current.next = cloneNode.next
    if nextNode:
      cloneNode.next = nextNode.next
    else:
      cloneNode.next = None
    current = current.next

if __name__ == '__main__':
  nodeA = Node('A')
  nodeB = Node('B')
  nodeC = Node('C')
  nodeD = Node('D')
  nodeE = Node('E')

  nodeA.next = nodeB
  nodeB.next = nodeC
  nodeC.next = nodeD
  nodeD.next = nodeE

  nodeA.slibing = nodeC
  nodeB.slibing = nodeE
  nodeD.slibing = nodeB

  linkedListOrigin = LinkedList()
  linkedListOrigin.head = nodeA
  linkedListClone = LinkedList()
  copy(linkedListOrigin, linkedListClone)
  linkedListClone.show()
