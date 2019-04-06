class Node:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None


class Tree:
  def __init__(self):
    self.head = None

  def __recurvise_preorder(self, node):
    print(node.value)
    if node.left:
      self.__recurvise_preorder(node.left)
    if node.right:
      self.__recurvise_preorder(node.right)

  def preorder(self):
    if not self.head:
      return
    self.__recurvise_preorder(self.head)

  def bfsOrder(self, callback):
    queue = [self.head]
    while len(queue):
      current = queue[0]
      del queue[0]
      callback(current.value)
      if current.left:
        queue.append(current.left)
      if current.right:
        queue.append(current.right)


node1 = Node(8)
node2 = Node(6)
node3 = Node(10)
node4 = Node(5)
node5 = Node(7)
node6 = Node(9)
node7 = Node(11)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

treeA = Tree()
treeA.head = node1

if __name__ == '__main__':
  def show(value):
    print(value)
  treeA.bfsOrder(show)
