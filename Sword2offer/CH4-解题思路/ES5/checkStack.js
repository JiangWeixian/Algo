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
  while (inPath.length) {
    stack.push(inPath.shift());
    if (stack.top() === outPath[0]) {
      stack.pop();
      outPath.shift();
    }
  }
  while (!stack.isEmpty()) {
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
var inArr2 = [1, 2, 3, 4, 5];
var outArr2 = [4, 3, 5, 1, 2];
console.log(check(inArr, outArr));
console.log(check(inArr2, outArr2));