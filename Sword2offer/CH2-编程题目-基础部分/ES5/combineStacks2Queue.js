'use strict';

var Stack = function Stack() {
  var _this = this;

  var items = [];
  var length = 0;
  this.push = function (value) {
    items.push(value);
    length += 1;
  };
  this.pop = function () {
    if (!_this.isEmpty()) {
      var value = items.pop();
      length -= 1;
      return value;
    }
    return null;
  };
  this.isEmpty = function () {
    return length === 0;
  };
};

var Queue = function Queue() {
  var stackIn = new Stack();
  var stackOut = new Stack();
  // 只有在stackout为空的时候，才进行将stackIn压入stackOut
  function makeStackOut() {
    if (stackOut.isEmpty()) {
      while (!stackIn.isEmpty()) {
        stackOut.push(stackIn.pop());
      }
    }
  }
  this.push = function (value) {
    stackIn.push(value);
  };
  this.shift = function () {
    makeStackOut();
    if (!stackOut.isEmpty()) {
      return stackOut.pop();
    }
    return null;
  };
};

var queue = new Queue();
// 测试队列基本功能
queue.push('a');
queue.push('b');
queue.push('c');
console.log(queue.shift());
console.log(queue.shift());
// 测试stackOut不是空的压入情况
queue.push('d');
console.log(queue.shift());
console.log(queue.shift());