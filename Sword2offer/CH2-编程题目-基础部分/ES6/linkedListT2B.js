let LinkedList = function () {
  let head = null
  let Item = function (value) {
    this.value = value
    this.next = null
  }
  function rPrint (root, callback) {
    if (root) {
      if (root.next) {
        rPrint(root.next, callback)
      }
      callback(root.value)
    }
  }
  this.push = (value) => {
    if (!head) {
      head = new Item(value)
    } else {
      let item = new Item(value),
        current = head
      while (current.next) {
        current = current.next
      }
      current.next = item
    }
  }
  this.reversePrint = (callback) => {
    if (!head) {
      callback('it is empty')
    }
    rPrint(head, callback)
  }
}

let linkedList = new LinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.reversePrint(function (value) {
  console.log(value)
})
