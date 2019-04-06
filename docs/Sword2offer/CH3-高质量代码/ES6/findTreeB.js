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

let compare = (treeA, treeB) => {
  // 注意递归的原子性，如果子结构相等。一直返回的是true
  // 原因在于B一定先比A到达末尾
  if (!treeB) {
    return true
  }
  // 只要有一个是false，整个递归树结构就是false
  if (!treeA) {
    return false
  }
  if (treeA.value !== treeB.value) {
    return false
  }

  return compare(treeA.left, treeB.left) && compare(treeA.right, treeB.right)
}

let has = (treeA, treeB) => {
  let result = false
  if (treeA && treeB) {
    // 和B根节点相等才有继续的可能
    if (treeA.value === treeB.value) {
      result = compare(treeA, treeB)
    }
    // 如果result=true代表找到了，就不用继续下去寻找了
    if (!result) {
      result = has(treeA.left, treeB)
    }
    if (!result) {
      result = has(treeA.right, treeB)
    }
  }
  return result
}

let node1 = new Node(8)
let node2 = new Node(8)
let node3 = new Node(7)
let node4 = new Node(9)
let node5 = new Node(2)
let node6 = new Node(4)
let node7 = new Node(7)

let treeA = new Tree()
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node5.left = node6
node5.right = node7
treeA.setHead(node1)
// 测试是否构建正确
// treeA.preOrder(function (value) {
//   console.log(value)
// })

let node8 = new Node(8)
let node9 = new Node(9)
let node10 = new Node(2)
let treeB = new Tree()
node8.left = node9
node8.right = node10
treeB.setHead(node8)
// 测试是否构建正确
// treeB.preOrder(function (value) {
//   console.log(value)
// })
console.log(has(treeA.getHead, treeB.getHead))
