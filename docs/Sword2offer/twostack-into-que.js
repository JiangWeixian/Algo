/**
 * Object Queue: Use two stack to combine into Queue.
 *
 * @attribute {array} stack1: push val into this stack
 * @attribute {array} stack2: pop the val of this stack
 *
 * @function push: push the val into this.stack1
 * @param {int} val: the value, any type
 *
 * @function pop: pop the value of stack2, there are few rules\
 * if stack2 not empty, pop the value of stack2
 * if stack2 empty, stack2 not empty, copy the value of stack1 into stack2, make stack = []
 * if stack2/stack1 all empty, just return error message
 *
 * @return {int} val: the value of last value of stack2
 */
var Queue = {
  init: function () {
    this.stack1 = []
    this.stack2 = []
  },
  push: function (val) {
    this.stack1.push(val)
  },
  pop: function () {
    var stack1Length = this.stack1.length
    var stack2Length = this.stack2.length
    if (stack2Length) {
      var val = this.stack2.pop()
      return val
    } else if (stack1Length) {
      this.stack2 = this.stack1
      this.stack2.reverse()
      this.stack1 = []
      var val = this.stack2.pop()
      return val
    } else {
      return 'Queue is empty!'
    }
  }
}

var Q1 = Object.create(Queue)
Q1.init()
Q1.push(1)
Q1.push(2)

console.log(Q1.pop())
Q1.push(3)
console.log(Q1.pop())
console.log(Q1.pop())
