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

class Finder:
  def __init__(self, *args, **kwargs):
    self.path = []
  
  def __recurvise_find(self, node, acc, last_path, target):
    node_arr = [node.left, node.right]
    for node in node_arr:
      current_node = node
      if current_node:
        current_acc = acc + current_node.value
        current_path = last_path + '-' +str(current_node.value)
        if current_acc == target:
          self.path.append(current_path)
          continue
        self.__recurvise_find(current_node, current_acc, current_path, target)
        
  def find(self, tree, target):
    if not tree:
      return {}
    self.__recurvise_find(tree, tree.value, str(tree.value), target)
    return self.path

node1 = Node(10)
node2 = Node(5)
node3 = Node(12)
node4 = Node(4)
node5 = Node(7)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5

treeA = Tree()
treeA.head = node1
treeA.preorder()

finder = Finder()
finder.find(treeA.head, 22)
print(finder.path)
