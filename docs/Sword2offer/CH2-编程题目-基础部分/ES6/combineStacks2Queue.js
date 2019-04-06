let Stack = function () {
  let items = []
  let length = 0
  this.push = (value) => {
    items.push(value)
    length += 1
  }
  this.pop = () => {
    if (!this.isEmpty()) {
      let value = items.pop()
      length -= 1
      return value
    }
    return null
  }
  this.isEmpty = () => {
    return length === 0
  }
}

let Queue = function () {
  let stackIn = new Stack()
  let stackOut = new Stack()
  // 只有在stackout为空的时候，才进行将stackIn压入stackOut
  function makeStackOut () {
    if (stackOut.isEmpty()) {
      while (!stackIn.isEmpty()) {
        stackOut.push(stackIn.pop())
      }
    }
  }
  this.push = (value) => {
    stackIn.push(value)
  }
  this.shift = () => {
    makeStackOut()
    if (!stackOut.isEmpty()) {
      return stackOut.pop()
    }
    return null
  }
}

let queue = new Queue()
// 测试队列基本功能
queue.push('a')
queue.push('b')
queue.push('c')
console.log(queue.shift())
console.log(queue.shift())
// 测试stackOut不是空的压入情况
queue.push('d')
console.log(queue.shift())
console.log(queue.shift())
