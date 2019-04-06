let LinkedList = function () {
  let head = null
  let Item = function (value) {
    this.value = value
    this.next = null
  }
  this.push = (value) => {
    if (!head) {
      head = new Item(value)
    } else {
      let item = new Item(value),
        current = head
      // 找到末尾节点
      while (current.next) {
        current = current.next
      }
      current.next = item
    }
  }
  this.getHead = () => {
    return head
  }
}

let reverse = () => {
  let tail = null
  let reverseLinkedlist = (root) => {
    if (root) {
      if (root.next) {
        let nextNode = reverseLinkedlist(root.next)
        nextNode.next = root
        return root
      } else {
        tail = root
        return root
      }
    }
  }
  return function (root) {
    reverseLinkedlist(root)
    root.next = null
    return tail
  }
}

let linkedList = new LinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
let reverseor = reverse()
let rLinkedList = reverseor(linkedList.getHead())
while (rLinkedList) {
  console.log(rLinkedList.value)
  rLinkedList = rLinkedList.next
}
