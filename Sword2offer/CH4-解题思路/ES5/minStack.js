'use strict';

// 创建堆栈
function Stack() {
  this.items = [];
}

Stack.prototype.push = function (value) {
  this.items.push(value);
};

Stack.prototype.pop = function () {
  return this.items.pop();
};

Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
};

// 与题目有关的数据结构
function MinStack() {
  Stack.call(this);
  this.minItems = [];
}

// 继承
MinStack.prototype = Object.create(Stack.prototype);

// 如果压入的元素比当前minitems最后一个元素要小(或者等于)就继续压入
// 等于是要保证全部元素相等的情况下的问题
MinStack.prototype.push = function (value) {
  Stack.prototype.push.call(this, value);
  if (this.minItems.length === 0) {
    this.minItems.push(value);
  } else {
    if (value <= this.minItems[this.minItems.length - 1]) {
      this.minItems.push(value);
    }
  }
};

// 弹出同样也要比较minitems中的元素
// 等于是要保证全部元素相等的情况下的问题
MinStack.prototype.pop = function (value) {
  if (!this.isEmpty()) {
    var popItem = Stack.prototype.pop.call(this);
    if (popItem <= this.minItems[this.minItems.length - 1]) {
      this.minItems.pop();
    }
    return popItem;
  }
  return null;
};

MinStack.prototype.min = function () {
  // 最小元素是minitems最后一个元素
  return this.minItems[this.minItems.length - 1];
};

var minStack = new MinStack();
minStack.push(4);
minStack.push(1);
minStack.push(5);
minStack.push(2);
minStack.push(3);
console.log('min', minStack.min());
console.log('pop', minStack.pop());
console.log('min', minStack.min());
console.log('pop', minStack.pop());
console.log('min', minStack.min());
console.log('pop', minStack.pop());
console.log('min', minStack.min());
console.log('pop', minStack.pop());
console.log('min', minStack.min());