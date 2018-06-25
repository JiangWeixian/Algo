class Node {
  constructor (value) {
    this.value = value
    this.next = null
    this.slibing = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }
  setHead (node) {
    this.head = node
  }
  show () {
    let current = this.head
    while (current) {
      console.log('current', current.value)
      if (current.slibing) {
        console.log('slibing', current.slibing.value)
      }
      current = current.next
    }
  }
}

let copy = (listA, listB) => {
  let current = listA.head
  while (current) {
    let cloneNode = new Node(current.value)
    let nextNode = current.next
    current.next = cloneNode
    cloneNode.next = nextNode
    current = current.next.next
  }
  current = listA.head
  while (current) {
    if (current.slibing) {
      let slibNode = current.slibing
      let cloneSlibNode = slibNode.next
      let cloneNode = current.next
      cloneNode.slibing = cloneSlibNode
    }
    current = current.next.next
  }
  current = listA.head
  listB.setHead(current.next)
  while (current) {
    let cloneNode = current.next
    let nextNode = cloneNode.next
    current.next = nextNode
    if (nextNode) {
      cloneNode.next = nextNode.next
    } else {
      cloneNode.next = null
    }
    current = current.next
  }
}

let nodeA = new Node('A')
let nodeB = new Node('B')
let nodeC = new Node('C')
let nodeD = new Node('D')
let nodeE = new Node('E')

nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = nodeE

nodeA.slibing = nodeC
nodeB.slibing = nodeE
nodeD.slibing = nodeB

let linkedListOrigin = new LinkedList()
linkedListOrigin.setHead(nodeA)
let linkedListClone = new LinkedList()
copy(linkedListOrigin, linkedListClone)
linkedListClone.show()
