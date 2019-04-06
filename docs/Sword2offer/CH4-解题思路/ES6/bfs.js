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
  bfsOrder (callback) {
    let queue = [this.head]
    while (queue.length) {
      let node = queue.shift()
      callback(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
}

let node1 = new Node(8)
let node2 = new Node(6)
let node3 = new Node(10)
let node4 = new Node(5)
let node5 = new Node(7)
let node6 = new Node(9)
let node7 = new Node(11)

let treeA = new Tree()
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
treeA.setHead(node1)
// 测试是否构建正确
treeA.bfsOrder(function (value) {
  console.log(value)
})
