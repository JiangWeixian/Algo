"use strict";

function Stack() {
  var items = [];
  this.push = function (value) {
    items.push(value);
  };
  this.pop = function () {
    return items.pop();
  };
  this.top = function () {
    return items[items.length - 1];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
  this.clear = function () {
    items = [];
  };
  this.show = function () {
    console.log(items);
  };
}

var check = function check(inPath, outPath) {
  var stack = new Stack();
  // 压入inpath元素
  while (inPath.length) {
    stack.push(inPath.shift());
    // 如果和弹出对应,就pop
    if (stack.top() === outPath[0]) {
      stack.pop();
      outPath.shift();
    }
  }
  // 如果stack不为空, 继续和outpath检测
  while (!stack.isEmpty()) {
    // 只要有一个不相等,就要是false
    if (stack.top() !== outPath[0]) {
      return false;
    }
    stack.pop();
    outPath.shift();
  }
  return true;
};

var inArr = [1, 2, 3, 4, 5];
var outArr = [4, 5, 3, 2, 1];
// 由于直接使用了shift会修改原数组,所以重新创建了一份
var inArr2 = [1, 2, 3, 4, 5];
var outArr2 = [4, 3, 5, 1, 2];
console.log(check(inArr, outArr));
console.log(check(inArr2, outArr2));