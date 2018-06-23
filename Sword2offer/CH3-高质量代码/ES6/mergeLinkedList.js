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
  this.print = () => {
    let current = head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
  this.getHead = () => {
    return head
  }
  this.merge = (listA, listB) => {
    if (!listA && !listB) {
      return
    }
    if (!listA && listB) {
      head = listB
      return
    }
    if (!listB && listA) {
      head = listA
      return
    }
    let currentA = listA
    let currentB = listB
    let current
    while (currentA && currentB) {
      if (currentA.value < currentB.value) {
        if (!head) {
          head = currentA
          current = head
        } else {
          current.next = currentA
          current = current.next
        }
        currentA = currentA.next
      } else {
        if (!head) {
          head = currentB
          current = head
        } else {
          current.next = currentB
          current = current.next
        }
        currentB = currentB.next
      }
    }

    if (currentA) {
      current.next = currentA
      current = current.next
      currentA = currentA.next
    }
    if (currentB) {
      current.next = currentB
      current = current.next
      currentB = currentB.next
    }
  }
}

let linkedListA = new LinkedList()
linkedListA.push(1)
linkedListA.push(3)
linkedListA.push(5)
linkedListA.push(7)
let linkedListB = new LinkedList()
linkedListB.push(2)
linkedListB.push(4)
linkedListB.push(6)
linkedListB.push(8)
let linkedList = new LinkedList()
linkedList.merge(linkedListA.getHead(), linkedListB.getHead())
linkedList.print()
