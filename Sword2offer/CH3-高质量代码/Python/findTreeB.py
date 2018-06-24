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

def compare(treeA, treeB):
  if not treeB:
    return True
  if not treeA:
    return False
  if treeA.value != treeB.value:
    return False

  return compare(treeA.left, treeB.left) and compare(treeA.right, treeB.right)

def has(treeA, treeB):
  result = False
  if treeA and treeB:
    if treeA.value == treeB.value:
      result = compare(treeA, treeB)
    if not result:
      result = has(treeA.left, treeB)
    if not result:
      result = has(treeA.right, treeB)

  return result

node1 = Node(8)
node2 = Node(8)
node3 = Node(7)
node4 = Node(9)
node5 = Node(2)
node6 = Node(4)
node7 = Node(7)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node5.left = node6
node5.right = node7

treeA = Tree()
treeA.head = node1
treeA.preorder()

node8 = Node(8)
node9 = Node(9)
node10 = Node(2)
node8.left = node9
node8.right = node10
treeB = Tree()
treeB.head = node8

print(has(treeA.head, treeB.head))
