const rPreOrder = Symbol('preorder')

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor () {
    this.head = null
  }
  get getHead () {
    return this.head
  }
  setHead (node) {
    this.head = node
  }
  [rPreOrder] (node, callback) {
    callback(node.value)
    if (node.left) {
      this[rPreOrder](node.left, callback)
    }
    if (node.right) {
      this[rPreOrder](node.right, callback)
    }
  }
  preOrder (callback) {
    if (!this.head) {
      return null
    }
    this[rPreOrder](this.head, callback)
  }
}

let recursiveFind = (node, acc, lastPath, pathMap, target) => {
  let nodeArr = [node.left, node.right]
  // 采用循环的方式是为了保证对于leftnode, rightnode使用相等lastpath
  for (let i = 0; i < nodeArr.length; i++) {
    let currentNode = nodeArr[i]
    // 递归边界条件是节点是否存在
    if (currentNode) {
      let currentAcc = acc + currentNode.value
      let currentPath = `${lastPath}-${currentNode.value.toString()}`
      // 因为默认树中数值都是正数，所以如果找到了这条路径，就中止寻找进行下一步查找
      if (currentAcc === target) {
        pathMap.push(currentPath)
        continue
      }
      // 如果没有找到继续查找
      recursiveFind(nodeArr[i], currentAcc, currentPath, pathMap, target)
    }
  }
}

let find = () => {
  let path = []
  return function (tree, target) {
    if (!tree) {
      return {}
    }
    // 传入初始数值和路径
    recursiveFind(tree, tree.value, tree.value.toString(), path, target)
    return path
  }
}

let node1 = new Node(10)
let node2 = new Node(5)
let node3 = new Node(12)
let node4 = new Node(4)
let node5 = new Node(7)

let treeA = new Tree()
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
treeA.setHead(node1)
// 测试是否构建正确
treeA.preOrder(function (value) {
  console.log(value)
})

let finder = find()
console.log(finder(treeA.head, 22))
